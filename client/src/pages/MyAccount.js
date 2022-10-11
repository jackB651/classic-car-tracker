import { useEffect, useState} from "react";
import ReviewCard from "../components/ReviewCard";
import UserCard from "../components/UserCard";

function MyAccount(){
    const [users, setUsers] = useState("")
   useEffect(()=>{
     fetch('/users')
     .then(r=>r.json())
     .then(r=>setUsers(r))
   },[])
console.log(users)
   const listUsers = users.map((user) => 
   <UserCard key = {user.id} user = {user}/>
   );
return(
   <div>
       <h2>Users</h2>
        {listUsers} 
   </div>
)
}
export default MyAccount;