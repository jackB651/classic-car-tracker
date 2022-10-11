import React, { useState } from "react";
import {useHistory} from  "react-router-dom";

function Login({user, setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory

    const item = {
        username: username,
        password: password
    }
    
    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(item)
        })
        .then(resp=>resp.json())
        .then(data=>{
            setUser(data)
            // history.push("/reviews")
        })
        console.log(user)
    }

    return(
        <div>
            <h1>Log in to your Account!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                       <label htmlFor="username">Username</label>
                       <input
                         type = "text"
                         id = "username"
                         autoComplete="off"
                         value={username}
                         onChange = {(e)=>setUsername(e.target.value)}
                       ></input>
                    </div>
                    <div>
                       <label htmlFor="password">Password</label>
                       <input
                         type = "password"
                         id = "password"
                         autoComplete="off"
                         value={password}
                         onChange = {(e)=>setPassword(e.target.value)}
                      ></input>
                    </div>
                    <div>
                        <button type="submit">
                            Log In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;