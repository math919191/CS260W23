import {React, useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';
import { Players } from './playElements/players';
import "../css/play.css"
import { SimonButton } from './playElements/simonButton';
import { GameControls } from './playElements/gameControls';
import { getRandomColor, saveScore, delay } from './playElements/play';


export function Play(props) {

  const [score, setScore] = useState(0);
  const [sequence, setSequence] = useState([]);
  const [currNumInSeq, setCurrNumInSeq] = useState(0);
  const [allowPlayer, setAllowPlayer] = useState(false);

  // let sequence = [];
  // function setSequence(seq){sequence = seq}

  // let currNumInSeq = 0;
  // function setCurrNumInSeq(num){currNumInSeq = num}


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

  async function flashButton(color){
    console.log(color);
    await getButtonFromColor(color).current.flash();
    await delay(300)
  }

  function reset(){
    startGame();
    // if (!gameIsOver){
    //   startGame();
    // } else {
    //   console.log("finish the game")
    // }
  }

  function onButtonClick(color){
    flashButton(color);
    if (color != sequence[currNumInSeq]){
      console.log("color: ", color)
      console.log(sequence)
      console.log(currNumInSeq)
      endGame();
    } else {
        if (currNumInSeq+1 == sequence.length){
          setCurrNumInSeq(0);
          playRound();
          setScore(score+1);
        } else {
          setCurrNumInSeq(currNumInSeq+1);

        }
    }
  }

  function startGame(){
    setAllowPlayer(false);
    setScore(0);
    setSequence([]);
    setCurrNumInSeq(0);
    playRound();

  }

  function endGame(){
    saveScore(score)
    setAllowPlayer(true);
    alert("Game over, click reset to play again")
  }

  async function playRound(){
    let newSeq =  [...sequence, getRandomColor()];
    setSequence(newSeq);
    console.log("playing sequence")
    //The sequence should play because sequence was changed, relying on the useEffect
    //await playSequence(newSeq)
  }

  // async function playSequence(sequence){
  //   console.log(sequence)
  //   for (let i = 0; i < sequence.length; i++){
  //     await flashButton(sequence[i]);
  //     console.log("flashed ", sequence[i])
  //   }    
  // }


  useEffect(() => {
    if (sequence.length > 0) {
      const playSequence = async () => {
        await delay(500);
        console.log(sequence)
        for (let i = 0; i < sequence.length; i++){
          await flashButton(sequence[i]);
        }    
  
        setAllowPlayer(true);
      };
      playSequence();
    }
  }, [sequence]);

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