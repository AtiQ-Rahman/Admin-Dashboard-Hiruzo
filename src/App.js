import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Home from "./Components/Home/Home/Home";

import Login from "./Components/Login/Login";
import OrderDetails from './Components/Home/OrderDetails/OrderDetails';


export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <Router>
    <Switch>
      <Route path ="/home">
      <Home></Home>
      </Route>
     
      <Route  path ="/OrderDetails/:_id">
        <OrderDetails></OrderDetails>
      </Route>
     
      <Route exact path= "/">
        <Login></Login>
      </Route>
    </Switch>
  </Router>



  );
}

export default App;
