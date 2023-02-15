import React from 'react';
import { LoginControls } from './loginElements/loginControls';
import { PlayControls } from './loginElements/playControls';

export function Login(props) {
  
  return (
    <div class="content">
      <h1>Welcome To Simon</h1>
      
      {props.loggedIn ?   <PlayControls/> : <LoginControls />}
      
      <div id="error"></div>
  </div>
  );
}