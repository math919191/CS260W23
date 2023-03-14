import {Routes, Route} from 'react';
import {PlayPage} from './play/playPage'
import LoginPage from './login/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {
  return (
    <div className="App">
      <br/>
      <h1>Connect 4</h1>
      {/* <LoginPage /> */}

      <PlayPage/>
    </div>
  );
}

export default App;
