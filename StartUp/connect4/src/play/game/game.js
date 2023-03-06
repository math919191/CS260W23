import {GameBoard} from './gameBoard'
import { Controls } from './controls'
import { Component } from 'react';


class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            history: [  
                {pieces: Array(7).fill().map(() => Array(6).fill("white"))}
            ],
            stepNum: 0,
            currPlayer: "red",   
        }
    }
    

    getCurrentPieces(){
        const history = this.state.history;
        const current = history[this.state.stepNum];
        return current.pieces.slice();
    }


    changePieceColor(col, row, newColor){
        
        let current = this.getCurrentPieces();
        current[col][row] = newColor;

        const history = this.state.history;

        this.setState({
            history: history.concat([{
              pieces: current,
            }]),
        });
    }

    changeTopPieceInCol(colNum, newColor){
        const col = this.getCurrentPieces()[colNum];
        let row;
        for (let i = col.length; i >= 0; i--){
            if (col[i] == "white"){
                row = i;
            }
        }
        this.changePieceColor(colNum, row, newColor);
    }

    resetGame(){
        //set pieces to white
        const blankBoard = Array(7).fill().map(() => Array(6).fill("white"));
        //this.setState({pieces: blankBoard})
        this.setState({history: [{pieces: blankBoard}]})
        //would allow undo
        // const history = this.state.history;

        // this.setState({
        //     history: history.concat([{
        //       pieces: blankBoard,
        //     }]),
        // });

    }

    handleBoardClick(i){
        
        this.setState({currPlayer: this.state.currPlayer == "red" ? "yellow": "red"});

        this.changeTopPieceInCol(i, this.state.currPlayer)
    }

    handleResetClick(){
        this.resetGame()
    }

    handleUndoClick(){
        const history = this.state.history;
        this.setState({stepNum : this.state.stepNum - 1})
        // const test = history.slice(0, history.length-1)
        // debugger
        // this.setState({
        //     history: test,
        // });

        
    }

    
    render(){

        const history = this.state.history;
        const current = history[history.length - 1];

        return (
            <>
                <div className='game'>
                    <GameBoard
                        columns={current.pieces}
                        onClick={i => this.handleBoardClick(i)}
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