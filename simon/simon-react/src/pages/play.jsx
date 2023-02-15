import React from 'react';
import "../css/play.css"

export function Play() {
  return (
  <div className="content">

    <div className="players">
      Player
      <span className="playerName" id="playerName"></span>
      <div id="player-messages">messages</div>
    </div>
    
    <div className="game">

          <div>
              <button 
                id="green" 
                className="top-left-quarter-circle"
                onClick="clicked('green')"
                ></button>            
              
              <button 
              id="red" 
              className="top-right-quarter-circle"
              onClick="clicked('red')"
                ></button>
              
              <br/>
              
              <button id="blue" className="bottom-left-quarter-circle" onClick="clicked('blue')"
              ></button>
              
              <button id="yellow" className="bottom-right-quarter-circle" onClick="clicked('yellow')"
              ></button>
          </div>

          <div className="game-controls">
              <div className="score-and-reset">
              <p>Score: <div id="score">0</div></p>

              <button id="reset" type="button" className="btn btn-primary" onClick="resetGame()">Reset</button>
              </div>
          </div>
          
      </div>
    </div>
  );
}