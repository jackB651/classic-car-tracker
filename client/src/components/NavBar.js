import { NavLink } from "react-router-dom";
import {useState, useEffect} from "react";

function Navbar ({user, setUser}){
    
  function handleLogOut(){
      fetch("/logout", {method: "DELETE"})
      .then((r)=>{
        if(r.ok){
          setUser(null)
        }
      })
  }
 
    return(
       <div>
           <div>
             <NavLink exact to="/Home">Home_</NavLink>
             <NavLink exact to="/reviews">_Reviews_</NavLink>
             <NavLink exact to="/cars">_Cars_</NavLink>
             <NavLink exact to="/create">_Create_Account_</NavLink>
             <NavLink exact to="/login">_Login_</NavLink>
             <NavLink exact to="/new_car">_New_car_</NavLink>
             <NavLink exact to="/new_review">_New_Review_</NavLink>
             <NavLink exact to="/user_account">_Accounts_</NavLink>
             { user == null ? <div></div>:<button onClick = {handleLogOut}>Logout</button>}
            </div>
       </div>
  )
}

export default Navbar;

//Graveyard 

//Log out button
   // function handleLogout (e){
    //     fetch("/logout",{method: "DELETE"})
    //     .then((r)=>{
    //         if (r.ok){setOwner(null)};
    //     })
    // }

    // history
   //import {useHistory} from  "react-router-dom";