import {React, useState, useEffect, AuthState,  forwardRef, useRef, useImperativeHandle } from 'react';
import { delay } from './play';

const SimonButton = forwardRef((props, ref) => {

    const [flashOn, setFlashOn] = useState(false);


    useImperativeHandle(ref, () => ({
        async flash(){
            await flash();
        }

      }));

    
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