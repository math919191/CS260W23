let colors = ["green", "red", "blue", "yellow"]

function getRandomColor(){
    let rand = Math.floor(Math.random()*10) % 4        
    return colors[rand];
}

function delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
}

async function saveScore(score){
  const playerName = localStorage.getItem('userName');
  const date = new Date().toLocaleDateString();

  let gameScore = {name : playerName, score: score, date: date }
  let currScores = JSON.parse(localStorage.getItem('scores'));
  
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
}

export {getRandomColor, delay, saveScore }

export default Play