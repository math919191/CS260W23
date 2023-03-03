
export function Dot(props){
    //eg "dot YellowDot"
    let classes = "dot "+ props.color + "Dot";
    return (
        <div className={classes}></div>
    )
}