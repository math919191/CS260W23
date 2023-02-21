
export function GameControls(props){
    return (
        <div className="game-controls">
            <div className="score-and-reset">
                <p>Score: {props.score}</p>

                <button type="button" 
                    className="btn btn-primary" 
                    onClick={()=>props.resetFunction()}>
                        Reset
                </button>
            </div>
        </div>

    )
}