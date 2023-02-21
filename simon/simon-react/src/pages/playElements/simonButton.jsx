
    
export function SimonButton(props){

    function getCSSClass(color){
        switch(color) {
            case "green":
              return "top-left-quarter-circle"
              break;
            case "red":
              return "top-right-quarter-circle"
              break;
            case "yellow":
                return "bottom-left-quarter-circle";
                break;
            case "blue":
                return "bottom-right-quarter-circle";    
                break;    
            default:
                return "";
          }
    } 

    return (
        <>
            <button 
                id={props.color} 
                className={getCSSClass(props.color)}
                onClick={() => props.clickFunction(props.color)}
            ></button>            
 
        </>
    )

}