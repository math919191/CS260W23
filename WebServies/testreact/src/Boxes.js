import Box from "./Box"

function Boxes(props){
    
    return (
        <div className="Boxes">
            <Box size={props.size}/>
            <Box size={props.size}/>
            <Box size={props.size}/>
            <Box size={props.size}/>
            <Box size={props.size}/>


        </div>
    )
}

export default Boxes;
