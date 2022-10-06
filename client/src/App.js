import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
 //basic cookies
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  //original return
//   return (
//     <div className="App">
//       <h1>Page Count: {count}</h1>
//     </div>
//   );
// }

//return with client side routes
return (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/testing">
          <h1>Test Route</h1>
        </Route>
        <Route path="/">
          <h1>Page Count: {count}</h1>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
}
export default App;
