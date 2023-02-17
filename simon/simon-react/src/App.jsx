import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import {React, useState, useEffect} from 'react';

import {Login} from "./pages/login"
import {Play} from "./pages/play"
import {Scores} from "./pages/scores"
import {About} from "./pages/about"
import {NotFound} from "./pages/notFound"


import Menu from './maincomponents/Menu'
import Footer from './maincomponents/Footer'

function App() {

  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  // Asynchronously determine if the user is authenticated by calling the service
  const [authState, setAuthState] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      if (username){
        let response = await fetch(`/api/user/${username}`);
        if (response.status === 200){
          let user = await response.json();
          setAuthState(user?.authenticated);
        }
      } else {
        setAuthState(false);
      }
    }
    fetchData().catch(console.error)

  }, [])


  return (
    <div>
      <Menu authState={authState} />

      <Routes>
        <Route path='/' element={<Login 
            onLogin={() => {console.log("setting authstate"); setAuthState(true)}}
            onLogout={() => {console.log("setting authstate"); setAuthState(false)}}

            loggedIn ={authState} 
            username = {username} />} 
            exact />

        <Route path='/play' element={<Play />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
