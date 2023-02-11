
class Game {
    constructor(){
        this.board = [];
        this.playerTurn = "yellow";
        this.initBoard()
    }

    startGame(){
        clearBoard();
        this.playerTurn = true;
    }

    takeTurnPlayer(colNum){}

    takeTurnComputer(){}

    checkWin(){}

    endGame(){}


    //helper functions
    clearBoard(){
        for (let i = 0; i < 7; i++){
            for (let j = 0; j < 6; j++){
                this.board[i][j] = "blank";
            }   
        }
    }

    initBoard(){
        for (let i = 0; i < 7; i++){
            this.board.push([])
            for (let j = 0; j < 6; j++){
                this.board[i].push("blank");
            }   
        }
    }

    updateBoard(colNum, color){
        
        for (let j = 6; j >= 0; j--){
            if (this.board[colNum][j] == "blank"){
                this.board[colNum][j] = color;
                this.changeDotColor(j,colNum,color)
                break;
            }
        }   
    }

    checkColNumFull(colNum){}
    
    changeDotColor(rowNum, colNum, color){
        const dot = document
                    .querySelector(`.row${rowNum+1}`)
                    .querySelector(`.col${colNum+1}`)

        dot.classList.add(`${color}Dot`)
        
    }
    rowClicked(rowNum){
        this.updateBoard(rowNum, this.playerTurn)
        this.playerTurn = (this.playerTurn == "red") ? "yellow" : "red" ;
        
    }

}


var game = new Game();

function rowClick(rowNum){
    game.rowClicked(rowNum)
    console.log(rowNum)
}
