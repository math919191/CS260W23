import {React, useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { Players } from './playElements/players';
import "../css/play.css"
import { SimonButton } from './playElements/simonButton';
import { GameControls } from './playElements/gameControls';


export function Play(props) {

  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [currNumInSeq, setCurrNumInSeq] = useState(0);

  const greenButton = useRef();
  const redButton = useRef();
  const blueButton = useRef();
  const yellowButton = useRef();

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

  function reset(){
    console.log('reset')
  }

  function onButtonClick(color){
    getButtonFromColor(color).current.flash();
    console.log(color)
  }

  function startGame(){
    setScore(0);
    setSequence([]);
    setCurrNumInSeq(0);
  }

  function endGame(){
    
  }

  return (
  <div className="content">
    <Players username={props.username}/>
    <div className="game">
          <div>
            <SimonButton color="green" clickFunction={onButtonClick} ref={greenButton}/>
            <SimonButton color="red" clickFunction={onButtonClick} ref={redButton}/> 
            <br></br>
            <SimonButton color="yellow" clickFunction={onButtonClick} ref={yellowButton}/>
            <SimonButton color="blue" clickFunction={onButtonClick} ref={blueButton}/>
          </div>
          
          <GameControls score={score} resetFunction={reset}/>
      </div>
    </div>
  );
}