import { Game} from './game/game.js'
import { MessageBoard } from './messageBoard/messageBoard.js'
import { ScoreBoard } from './scoreBoard/scoreBoard.js'

export function PlayPage() {

    return (
        <>
            <div className='playPage'>
                <Game/>
                <MessageBoard/>
                <ScoreBoard/>
            </div>
        </>
    )

}