import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Reviews from "./pages/Reviews";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import NewReview from "./pages/NewReview";
import NewCar from "./pages/NewCar";
import MyAccount from "./pages/MyAccount";

function App() {

 const [user, setUser] = useState(null)
//return with client side routes
return (
  
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/reviews">
          <Reviews/>
        </Route>
        <Route path="/cars">
          <Cars/>
        </Route>
        <Route path="/create">
          <Create user = {user} setUser = {setUser}/>
        </Route>
        <Route path="/login">
          <Login user = {user} setUser = {setUser}/>
        </Route>
        <Route path="/new_car">
          <NewCar/>
        </Route>
        <Route path="/new_review" user = {user}>
          <NewReview/>
        </Route>
        <Route path="/user_account">
          <MyAccount user = {user}/>
        </Route>
      </Switch>
    </div>
  
);
}
export default App;


//Graveyard

// const [count, setCount] = useState(0);
//  
//test
 // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  //original return
//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }