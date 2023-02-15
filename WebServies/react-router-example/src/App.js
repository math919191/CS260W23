import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import { Home } from './Components/home'
import { Login } from './Components/login'
import { Play } from './Components/play'
import { NotFound } from './Components/notfound'


function App() {
  return (
    <div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>

          <li><Link to="/play">Play</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/:username" element={<Login />}></Route>
        <Route path="/play" element={<Play />}></Route>
        <Route path="*" element={<NotFound />} />

      </Routes>


    </div>
  );
}

export default App;
