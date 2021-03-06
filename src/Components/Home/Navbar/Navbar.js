import React,{useContext} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navar-container'>
            
             <nav class="navbar navbar-expand-lg navbar-light  text-white">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   <ul>
   <li class="nav-item ">
   <Link class="nav-link ms-5 text-brand display-1" to="/home"> <h1>Admin Dashboard</h1></Link>
        </li>
   </ul>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
        
         <li class="nav-item">
          <Link class="nav-link ms-5 text-brand btn btn-outline-secondary" to="/home">Home</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link ms-5 text-brand btn btn-outline-secondary" to="/home">About</Link>
        </li>


        <li class="nav-item">
         <Link class="nav-link ms-5 text-brand btn btn-light font-weight-bold" >Admin</Link> 
        </li>

      </ul>
      
    </div>
  </div>
</nav>

        </div>
    );
};

export default Navbar;