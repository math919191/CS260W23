import React from 'react';

export function LoginControls() {
  return (
        <div id="loginControls">            
              <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                  <input type="email" id="username" class="form-control" placeholder="Email address"/>
                </div>
              
                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                  <input type="password" id="password" class="form-control" placeholder="Password"/>
                </div>
              
                {/* <!-- Submit button --> */}
                <button type="button" class="btn btn-primary btn-block mb-4" onclick='loginUser()'>Log in</button>
                {/* <!-- Create button --> */}
                <button type="button" class="btn btn-secondary btn-block mb-4" onclick='createUser()'>Create</button>              
                
              </form>
            
        </div>

    );
}