// Event messages
const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';


class Button {
    constructor(id){
        this.elName = document.getElementById(id)
        this.audio = this.loadAudio(id)
    }

    async flashButton(){
        this.elName.style.opacity = .5
        //this.audio.play()
        await delay(500);
        this.elName.style.opacity = 1 
        await delay(500)       
    }

    loadAudio(fileNum){
        let fileName = "../assets/sound" + fileNum + ".mp3"
        var audio = new Audio(fileName)
        return audio    
    }

}


class Buttons {
    constructor(){
        this.colors = ["green", "red", "blue", "yellow"]
        
        this.green = new Button("green")
        this.red = new Button("red")
        this.blue = new Button("blue")
        this.yellow = new Button("yellow")
        this.buttons = [this.green, this.red,this.blue,this.yellow]
        this.buttonDict = {
            "green":this.green,
            "blue":this.blue,
            "yellow":this.yellow,
            "red":this.red,
            
        }
        this.errorAudio = new Audio("../assets/error.mp3");
    }

    async flashMyButton(id){
        switch(id) {
            case "green":
              // code block
                await this.green.flashButton()

                break;
            case "blue":
                await this.blue.flashButton()

                break;
            case "yellow":
                await this.yellow.flashButton()

            // code block
                break;
            case "red":
                await this.red.flashButton()

            // code block
                break;
              
            default:
              // code block
          }
    }

    async flashButtons(){
        await this.green.flashButton()
        await this.blue.flashButton()
        await this.yellow.flashButton()
        await this.red.flashButton()
    }


}

class playGame {

    constructor(){
        this.score = 0;
        this.sequence = [];
        this.currNum = 0;
        this.colors = ["green", "red", "blue", "yellow"]
        this.socket = "";
        
        this.configureWebSocket();
        this.startGame()

    }

    getRandColor(){
        let rand = Math.floor(Math.random()*10) % 4
        
        let color = this.colors[rand] 
        return color
    }

    async round(){

        this.sequence.push(this.getRandColor())
        this.currNum = 0
        await delay(1000)
        await this.playSequence()
    }


    startGame(){
        this.score = 0;
        this.setScore(0)
        this.sequence = [];
        this.currNum = 0;
        
        // Let other players know a new game has started
        // try {
        //     this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});
        // } catch (err){
        //     console.log(err)
        // }
//        this.broadcastEvent(this.getPlayerName(), GameStartEvent, {});

        this.round()
    }

    
    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Mystery player';
    }

    async playSequence(){
        for (let i = 0; i < this.sequence.length; i++){
            await buttons.flashMyButton(this.sequence[i])    
        }
    }

    checkClick(button){
        if (button != this.sequence[this.currNum]){
            this.endGame()
        } else {
            this.currNum++;
            if (this.currNum == this.sequence.length){
                this.round()
                this.updateScore()
        
            }
        }
    }

    updateScore(){
        this.score ++;
        this.setScore(this.score)
    }

    setScore(num){
        let scoreEl = document.getElementById("score")
        scoreEl.innerHTML = num

    }




    async endGame(){
        const playerName = localStorage.getItem('userName');
        const date = new Date().toLocaleDateString();

        let gameScore = {name : playerName, score: this.score, date: date }
        let currScores = JSON.parse(localStorage.getItem('scores'));
        
        this.broadcastEvent(playerName, GameEndEvent, gameScore);

        //
    
        try {
          const response = await fetch('/api/score', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(gameScore),
          });
    
          // Store what the service gave us as the high scores
          const scores = await response.json();
          localStorage.setItem('scores', JSON.stringify(scores));
        } catch {
          // If there was an error then just track scores locally
                if (currScores){
                    for (let i = 0; i < currScores.length; i++) {
                        if (currScores[i].score <= this.score){
                            currScores.splice(i, 0, gameScore);
                            break;
                        }
                    }
                    localStorage.setItem("scores", JSON.stringify(currScores))
                } else {
                    let array = []
                    array.push(gameScore)
                    localStorage.setItem("scores", JSON.stringify(array))
                }

        }

        

        alert("Game over, click to play again")

        this.startGame()
    }


    // Functionality for peer communication using WebSocket

  configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg('system', 'game', 'connected');
      console.log("opened")
    };
    this.socket.onclose = (event) => {
      this.displayMsg('system', 'game', 'disconnected');
      console.log("closed")

    };
    this.socket.onmessage = async (event) => {
      const msg = JSON.parse(await event.data.text());
      if (msg.type === GameEndEvent) {
        this.displayMsg('player', msg.from, `scored ${msg.value.score}`);
      } else if (msg.type === GameStartEvent) {
        this.displayMsg('player', msg.from, `started a new game`);
      }
      console.log("message")

    };
  }

  displayMsg(cls, from, msg) {
    console.log("message")
    const chatText = document.querySelector('#player-messages');

    chatText.innerHTML =
      `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` +
      chatText.innerHTML;
  }

  broadcastEvent(from, type, value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    console.log("sending", JSON.stringify(event) )
    this.socket.send(JSON.stringify(event));
    // this.socket.send(`{"msg":"testing"}`)
  }
}





function clicked(button){
    buttons.flashMyButton(button)    
    game.checkClick(button)
 
}




function getPlayerName(){
    const playerName = localStorage.getItem('userName');
    let name = "";
    if (playerName) {
        name = playerName;
    } else {
        name = "MYSTERY???"
        localStorage.setItem("userName", "MYSTERY??")
    }
    const nameEl = document.querySelector("#playerName")
    nameEl.innerHTML = "Player: " + name
}




getPlayerName()

var buttons = new Buttons();
var game = new playGame();

function resetGame(){

   game.startGame()
 
}



function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
}

