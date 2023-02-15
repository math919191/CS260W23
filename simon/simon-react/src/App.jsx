import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import {Login} from "./pages/login"
import {Play} from "./pages/play"
import {Scores} from "./pages/scores"
import {About} from "./pages/about"
import {NotFound} from "./pages/notFound"


import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Menu />

    <Routes>
      <Route path='/' element={<Login />} exact />
      <Route path='/play' element={<Play />} />
      <Route path='/scores' element={<Scores />} />
      <Route path='/about' element={<About />} />
    </Routes>

      

      <Footer />

    </div>
  );
}

export default App;
