import { NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


import {Login} from "../pages/login"
import {Play} from "../pages/play"
import {Scores} from "../pages/scores"
import {About} from "../pages/about"
import {NotFound} from "../pages/notFound"


function Menu() {

  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <NavLink className='navbar-brand' to=''>Simon</NavLink> */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {/* <NavLink className='nav-link' to=''>Simon</NavLink> */}
          </li>
          <li className="nav-item">
            {/* <Link className='nav-link' to='/play'>Simon</Link> */}

          </li>
          <li className="nav-item">
            {/* <NavLink className='nav-link' to='/scores'>Simon</NavLink> */}
          </li>
          <li className="nav-item">
            {/* <NavLink className='nav-link' to='/about'>Simon</NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  </header>


  {/* <Routes>
    <Route path='/' element={<Login />} exact />
    <Route path='/play' element={<Play />} />
    <Route path='/scores' element={<Scores />} />
    <Route path='/about' element={<About />} />
  </Routes> */}

  </div>

  

  );
}

export default Menu;
