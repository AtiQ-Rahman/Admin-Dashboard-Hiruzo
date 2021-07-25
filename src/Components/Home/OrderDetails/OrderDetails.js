import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


const ProfileDetails = () => {
    const {_id} =useParams();

    const history = useHistory();
  
 
    const [profile ,setProfile] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:3000/api/booking')
        .then(res => res.json())
        .then(data => setProfile(data))
    }, [])
   
    const profileList =  profile.find(profiles =>profiles?._id ===_id)
  
    const handleAcceptBooking = (secretCode) => {
        const putMethod = {
          method: 'PUT', // Method itself
          headers: {
          'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
          },
          body: JSON.stringify({
            secretCode : secretCode
           }) // We send data in JSON format
        }
        fetch('http://localhost:3000/api/booking/accepted',
          putMethod).then(res =>  window.location.href = "/home")
    }
    const handleRejectBooking = (secretCode) => {
      const putMethod = {
        method: 'PUT', // Method itself
        headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify({
          secretCode : secretCode
         }) // We send data in JSON format
      }
      fetch('http://localhost:3000/api/booking/rejected',
        putMethod).then(res =>  window.location.href = "/home")
  }

    return (
        <div className="container-fluid row">
         <Navbar></Navbar>
           <div className=" p-5 text-center">
           
           <h1>  {profileList?.name}</h1>
          
           <p className='text-secondary'> <b>Contact No: </b>{profileList?.phone}</p>
           <p className='text-secondary'> <b>Email     : </b>{profileList?.email}</p>
           <p className='text-secondary'> <b>Address:    </b> {profileList?.address}</p>
           <p className='text-secondary'> <b>CheckInTime:</b> {profileList?.checkInTime}</p>
           <p className='text-secondary'> <b>CheckOutTime:</b>{profileList?.checkOutTime}</p>
         <div className=''>
         <button onClick={() => handleAcceptBooking(profileList._id)} className="btn btn-success">accept</button>
         <button   onClick={() => handleRejectBooking(profileList._id)} className="btn btn-danger m-3">Reject</button>
         </div>
          
           </div>
           
         
        </div>
    );
};

export default ProfileDetails;