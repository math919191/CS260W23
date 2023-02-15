import React from 'react';
import "../css/play.css"

export function Play() {
  return (
  <div class="content">

    <div class="players">
      Player
      <span class="playerName" id="playerName"></span>
      <div id="player-messages">messages</div>
    </div>
    
    <div class="game">

          <div>
              <button 
                id="green" 
                class="top-left-quarter-circle"
                onclick="clicked('green')"
                ></button>            
              
              <button 
              id="red" 
              class="top-right-quarter-circle"
              onclick="clicked('red')"
                ></button>
              
              <br/>
              
              <button id="blue" class="bottom-left-quarter-circle" onclick="clicked('blue')"
              ></button>
              
              <button id="yellow" class="bottom-right-quarter-circle" onclick="clicked('yellow')"
              ></button>
          </div>
          
          <div class="game-controls">
              <div class="score-and-reset">
              <p>Score: <div id="score">0</div></p>

              <button id="reset" type="button" class="btn btn-primary" onclick="resetGame()">Reset</button>
              </div>
          </div>
          
      </div>
    </div>
  );
}