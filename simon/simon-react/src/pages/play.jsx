import React from 'react';
import { Players } from './playElements/players';
import "../css/play.css"
import { SimonButton } from './playElements/simonButton';
import { GameControls } from './playElements/gameControls';


export function Play() {

  let scoreVar = 10;
  function onButtonClick(color){
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
            <SimonButton color="green" clickFunction={onButtonClick}/>
            <SimonButton color="red" clickFunction={onButtonClick}/>
            <br></br>
            <SimonButton color="yellow" clickFunction={onButtonClick}/>
            <SimonButton color="blue" clickFunction={onButtonClick}/>
          </div>
          
          <GameControls score={scoreVar} resetFunction={reset}/>
      </div>
    </div>
  );
}