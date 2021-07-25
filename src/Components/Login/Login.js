import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Home/Navbar/Navbar';
import { Link } from 'react-router-dom';
import LoginBg from '../image/buying-car.jpg';

const Login = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  // const handleGoogleSignIn = () => {
  //   var provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(provider).then(function (result) {
  //     const { displayName, email } = result.user;
  //     const signedInUser = { name: displayName, email }
  //     setLoggedInUser(signedInUser);
  //     storeAuthToken();
  //   }).catch(function (error) {
  //     const errorMessage = error.message;
  //     console.log(errorMessage);
  //   });
  // }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div >
    <Navbar></Navbar>
     <div className="login-page container">
     <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
      <h2>Login Here</h2>
        
          <div className="form-group" className='pt-5'>
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" required  />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-3">
            <Link to={`/home`} className="btn btn-danger" > Sign in</Link>
          </div>
          {/* <div className="from-group mt-3">
            <button className="btn btn-dark" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div> */}
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={LoginBg} alt="" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Login;