import React, { useState } from "react";

function Create(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return(
        <div>
            <h1>Create your Account</h1>
            <form>
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

export default Create;