import {GameBoard} from './gameBoard'
import { Controls } from './controls'
import { Component } from 'react';
import { checkWin } from './checkWin';
import WinMessage from './winMessage';
import PlayerScores from './playerScores';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            history: [  
                {pieces: Array(7).fill().map(() => Array(6).fill("white"))}
            ],
            stepNum: 0,
            currPlayer: "red",
            showWinMessage: false,
            winner: "none",
            winCount: {red: 0, yellow: 0},   
            canPlay: true,
        }
    }
    

    getCurrentPieces(){
        const history = this.state.history;
        const current = history[this.state.stepNum];
        return current.pieces.slice();
    }

    deepCopy(item){
        return JSON.parse(JSON.stringify(item));
    }

    addBoardToHistory(board){
        const history = this.state.history;

        history.push({pieces: board})
        this.setState({
            history: history
        })

    }

    changePieceColor(col, row, newColor){
        
        //gets a deep copy of the current pieces
        let current = this.deepCopy(this.getCurrentPieces());
        current[col][row] = newColor;

        this.addBoardToHistory(current);

    }

    changeTopPieceInCol(colNum, newColor){
        const col = this.getCurrentPieces()[colNum];
        let row = -1;
        for (let i = 0; i < col.length; i++){
            
            if (col[i] == "white"){
                row = i;
                break;
            }
        }
        
        if (row != -1){
            this.changePieceColor(colNum, row, newColor);
            return true;
        } else {
            return false;
        }
    }

    resetGame(){
        //set pieces to white
        const blankBoard = Array(7).fill().map(() => Array(6).fill("white"));
        //this.setState({pieces: blankBoard})
        this.setState({
            history: [{pieces: blankBoard}],
            stepNum: 0,
            canPlay: true,
        })

    }

    handleBoardClick(i){
        if (this.state.canPlay){
            const success = this.changeTopPieceInCol(i, this.state.currPlayer)
            if (success){
                this.setState(
                    {
                        currPlayer: this.state.currPlayer == "red" ? "yellow": "red",
                        stepNum : this.state.stepNum + 1,
                    });    
            }
    
            let winner = checkWin(this.state.history.slice(-1)[0].pieces); 
            if (!!winner){
              this.handleWin(winner)  
            }    
        }
    }

    handleWin(winner){
        this.setState(
            {showWinMessage: true,
             winner: winner,
             canPlay: false,
        })

        const winCount = this.deepCopy(this.state.winCount);
        if (winner == "red"){
            winCount.red += 1; 
        } else {
            winCount.yellow +=1;            
        }
        this.setState({winCount: winCount})
    }


    handleResetClick(){
        this.resetGame()
    }

    handleUndoClick(){
        const history = this.state.history;
        this.setState({history: this.state.history.splice(0, this.state.history.length-1)})
        this.setState({stepNum : this.state.stepNum - 1})
        this.setState({currPlayer: this.state.currPlayer == "red" ? "yellow": "red"})
        
    }

    handleCloseMessage(){
        this.setState({showWinMessage : false})
    }

    
    render(){

        const history = this.state.history;
        const current = history[this.state.stepNum];

        return (
            <>
                <div className='game'>
                    <WinMessage 
                        show={this.state.showWinMessage}
                        onClose={ () => this.handleCloseMessage() }
                        description={"Winner Winner Chicken Dinner"}
                        title={"Nice job, " + this.state.winner + " won!"}
                    />

                    <GameBoard
                        columns={current.pieces}
                        onClick={i => this.handleBoardClick(i)}
                    />

                    <PlayerScores 
                        player1={"Red"}
                        player1Score={this.state.winCount.red}
                        player2={"Yellow"}
                        player2Score={this.state.winCount.yellow}
                        upNextColor={this.state.currPlayer}

                    />
                    <Controls
                        onResetClick={() => this.handleResetClick()}
                        onUndoClick= {() => this.handleUndoClick()}
                    />
                </div>
            </>
        )
    }
}

export {Game};