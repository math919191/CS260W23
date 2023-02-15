import { useParams } from "react-router-dom"


export function Login() {
    const { username } = useParams() 
    
    return (
        <div>
            <h1>Login</h1> 
            <h2>Welcome {username}!</h2>
        </div>
        )
  }