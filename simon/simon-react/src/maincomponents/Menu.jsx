import { NavLink, Link, Outlet} from 'react-router-dom';

function Menu() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className='navbar-brand' to=''>Simon</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className='nav-link' to=''>Simon</NavLink>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/play'>Play</Link>

            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/scores'>Scores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <Outlet />


  </>

  

  );
}

export default Menu;
