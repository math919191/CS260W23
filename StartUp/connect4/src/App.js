import {Routes, Route} from 'react';
import {PlayPage} from './play/playPage'
import WinMessage from './play/game/winMessage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {
  return (
    <div className="App">

      <PlayPage/>
    </div>
  );
}

export default App;
