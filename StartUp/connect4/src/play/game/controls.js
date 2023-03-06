export function Controls(props){
    return (
        <>
            <button type="button" className="btn btn-secondary" onClick={() => props.onResetClick()}>Reset Game</button>
            <button type="button" className="btn btn-secondary" onClick={() => props.onUndoClick()}>Undo</button>
        </>
    )
}