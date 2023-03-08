export default function PlayerScores(props){

    return (
        <div className="playerScores">
                            
            <ul class="list-inline">
                <li class="list-inline-item h1">{props.player1 + ": " + props.player1Score}</li>
                <li class="list-inline-item h1">{props.player2 + ": " + props.player2Score}</li>    
            </ul>

            <p class="h1 left"> { "Up Next: " + props.upNextColor + " " + props.upNextPlayer} </p>
            
        </div>
    )
}