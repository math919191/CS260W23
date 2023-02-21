import {React, forwardRef, useRef, useImperativeHandle } from 'react';
import { Players } from './playElements/players';
import "../css/play.css"
import { SimonButton } from './playElements/simonButton';
import { GameControls } from './playElements/gameControls';


export function Play() {


  const greenButton = useRef();
  const redButton = useRef();
  const blueButton = useRef();
  const yellowButton = useRef();

  let scoreVar = 10;


  function getButtonFromColor(color){
    switch(color) {
      case "green":
        return greenButton
        break;
      case "red":
        return redButton
        break;
      case "yellow":
          return yellowButton
          break;
      case "blue":
          return blueButton    
          break;    
      default:
          return "";
    }
  }

  function onButtonClick(color){
    //childRef.current.getAlert()
    getButtonFromColor(color).current.flash();
        console.log(color)
  }

  function reset(){
    console.log('reset')
  }


  return (
  <div className="content">
    <Players />
    <div className="game">
          <div>
            <SimonButton color="green" clickFunction={onButtonClick} ref={greenButton}/>
            <SimonButton color="red" clickFunction={onButtonClick} ref={redButton}/> 
            <br></br>
            <SimonButton color="yellow" clickFunction={onButtonClick} ref={yellowButton}/>
            <SimonButton color="blue" clickFunction={onButtonClick} ref={blueButton}/>
          </div>
          
          <GameControls score={scoreVar} resetFunction={reset}/>
      </div>
    </div>
  );
}