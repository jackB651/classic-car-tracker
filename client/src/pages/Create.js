import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Create({user, setUser}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault()
        const itemData = {
            username: username,
            password: password
        }
        fetch('/signup',{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(itemData)
        })
        .then(r=>r.json())
        .then(resp => setUser(resp))
    }

    return(
        <div>
            <h1>Create your Account</h1>
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
                         type = "text"
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

export default Create;