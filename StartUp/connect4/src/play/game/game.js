import {GameBoard} from './gameBoard'
import { Controls } from './controls'


export function Game() {

    
    function getCol(){
        let cols = [];
        for (let i = 0; i < 7; i++){
            cols.push([])
            for (let j = 0; j < 6; j++){
                cols[i].push("white")
            }   
        }
        return cols;
    }
    
    function handleClick(i){
        console.log("col", i)

    }
    
    return (
        <>
            <div className='game'>
                <GameBoard
                    columns={getCol()}
                    onClick={i => handleClick(i)}
                />
                <Controls/>
            </div>
        </>
    )

}