
class Game {
    constructor(){
        this.board = [];
        this.playerTurn = true;
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
    clearBoard(){}
    initBoard(){}
    checkColNumFull(colNum){}
    


}

