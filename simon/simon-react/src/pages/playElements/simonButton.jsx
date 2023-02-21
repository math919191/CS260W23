import {React, useState, useEffect, AuthState,  forwardRef, useRef, useImperativeHandle } from 'react';
// import {} from 'react';

    
const SimonButton = forwardRef((props, ref) => {
//    const Child = forwardRef((props, ref) => {

    const [flashOn, setFlashOn] = useState(false);


    useImperativeHandle(ref, () => ({

        getAlert() {
          alert("getAlert from Child");
        },
        
        async flash(){
            await flash();
        }

      }));


    function delay(milliseconds) {
        return new Promise((resolve) => {
          setTimeout(resolve, milliseconds);
        });
    }

    
    async function flash(){
        setFlashOn(true);
        await delay(500);
        setFlashOn(false);
    }


    function handleClick(){
        props.clickFunction(props.color)
        flash()
    }

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
                className={getCSSClass(props.color) + " " +(flashOn ? "flash-on" : "")}
                onClick={() => handleClick()}
            ></button>            
 
        </>
    )

})

export {SimonButton};