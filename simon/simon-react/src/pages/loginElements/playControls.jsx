import { NavLink, Link, Outlet} from 'react-router-dom';

import React from 'react';

export function PlayControls(props) {

  async function logOut(){

  await fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));

    localStorage.removeItem("username");  
    props.onLogout();
  }

  return (
    <div id="playControls">            
    <form>

      <p>Welcome {props.username}!</p>
      <button type="button" className="btn btn-primary btn-block mb-4">
        <Link className='nav-link' to='/play'>Play</Link>
      </button>


      <button type="button" className="btn btn-secondary btn-block mb-4" onClick={()=>logOut()}>Logout</button>
    
      
    </form>
  
  </div>
    );
}