import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Home from "./Components/Home/Home/Home";

import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute";
import ProfileDetails from './Components/Home/OrderDetails/OrderDetails';


export const UserContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
      <Route path ="/home">
      <Home></Home>
      </Route>
     
      <Route  path ="/ProfileDetails/:_id">
        <ProfileDetails></ProfileDetails>
      </Route>
     
      <Route exact path= "/">
        <Login></Login>
      </Route>
    </Switch>
  </Router>


  // </UserContext.Provider>


  );
}

export default App;
