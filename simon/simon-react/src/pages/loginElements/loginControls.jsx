import {React, useState} from 'react';

export function LoginControls(props) {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  function loginUser(){
    console.log("loggin user in");
    callEndpointLoginOrCreate(`/api/auth/login`);
  }

  function createUser(){
    callEndpointLoginOrCreate(`/api/auth/create`);

  }

  async function callEndpointLoginOrCreate(endpoint){
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: username, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (response?.status == 200){
      localStorage.setItem('username', username);
      console.log("loggin user in, going to switch to play controls");
      props.onLogin(username);
    } else {
      const body = await response.json();
      setErrorMessage(`⚠ Error: ${body.msg}`);
    }

  }


  return (
        <div id="loginControls">            
              <form>

                <div className="form-outline mb-4">
                  <input type="email" 
                    id="username" 
                    className="form-control" 
                    placeholder="Email address"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              
                <div className="form-outline mb-4">
                  <input type="password" 
                    id="password" 
                    className="form-control" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                </div>
              
                <button type="button" className="btn btn-primary btn-block mb-4" 
                  onClick={() => loginUser()}>Log in</button>

                <button type="button" className="btn btn-secondary btn-block mb-4" 
                  onClick={() => createUser()}>Create</button>              
                
                { errorMessage != null &&                
                  <div className="alert alert-danger" role="alert" >
                    {errorMessage}
                  </div>
                }       
              </form>
            
        </div>

    );
}