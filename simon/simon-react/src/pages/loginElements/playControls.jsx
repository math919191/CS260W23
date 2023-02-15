
import React from 'react';

export function PlayControls() {
  return (
    <div id="playControls">            
    <form>
      {/* <!-- Submit button --> */}
      <button type="button" className="btn btn-primary btn-block mb-4" onClick="play()">Play</button>
      {/* <!-- Create button --> */}
      <button type="button" className="btn btn-secondary btn-block mb-4" onClick="logout()">Logout</button>
    
      
    </form>
  
  </div>
    );
}