import './scoreBoard.css'
export function ScoreBoard(){
    return (
        <>
                <div class="scoreboard">
            <div class="scoreboardTitle">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Top Players</li>
                </ul>
            </div>

            <div class="topPlayers">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">John</li>
                    <li class="list-group-item">James</li>
                    <li class="list-group-item">Peter</li>
                    <li class="list-group-item">Andrew</li>
                    <li class="list-group-item">Michael</li>
                </ul>
            </div>
        </div>
    </>
    )
}