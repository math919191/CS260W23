import {React, useState, useEffect, AuthState} from 'react';
import { LoginControls } from './loginElements/loginControls';
import { PlayControls } from './loginElements/playControls';



export function Login(props) {

  return (
    <div className="content">
      <h1>Welcome To Simon</h1>
      
      {props.loggedIn ?   
        <PlayControls username={props.username} onLogout={()=>props.onLogOut()}/> : 
        <LoginControls onLogin={() => props.onLogin()}
      />}
      
      <div id="error"></div>
  </div>
  );
}