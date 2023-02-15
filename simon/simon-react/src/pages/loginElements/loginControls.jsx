import React from 'react';

export function LoginControls() {
  return (
        <div id="loginControls">            
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="username" className="form-control" placeholder="Email address"/>
                </div>
              
                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="password" className="form-control" placeholder="Password"/>
                </div>
              
                {/* <!-- Submit button --> */}
                <button type="button" className="btn btn-primary btn-block mb-4" onClick='loginUser()'>Log in</button>
                {/* <!-- Create button --> */}
                <button type="button" className="btn btn-secondary btn-block mb-4" onClick='createUser()'>Create</button>              
                
              </form>
            
        </div>

    );
}