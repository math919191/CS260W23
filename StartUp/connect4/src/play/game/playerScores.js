export default function PlayerScores(props){


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const dotClasses = "list-inline-item nextDot " + props.upNextColor + "Dot";  
    return (
        <div className="playerScores">
                            
            <ul class="list-inline">
                <li class="list-inline-item h2">{props.player1 + ": " + props.player1Score}</li>
                <li class="list-inline-item h2">{props.player2 + ": " + props.player2Score}</li>
                
            </ul>            

                            
            <ul class="list-inline">
                <li class="list-inline-item h1">{"Next "} </li>
                <li class={dotClasses}></li>
                
            </ul>            

        </div>
    )
}