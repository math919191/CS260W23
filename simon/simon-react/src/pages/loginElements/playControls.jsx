
import React from 'react';

export function PlayControls() {
  return (
    <div id="playControls">            
    <form>
      {/* <!-- Submit button --> */}
      <button type="button" class="btn btn-primary btn-block mb-4" onclick="play()">Play</button>
      {/* <!-- Create button --> */}
      <button type="button" class="btn btn-secondary btn-block mb-4" onclick="logout()">Logout</button>
    
      
    </form>
  
  </div>
    );
}