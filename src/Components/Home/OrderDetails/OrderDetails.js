import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


function OrderDetails() {
  const { _id } = useParams();


  const [profile, setProfile] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/api/booking')
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  const orderList = profile.find(profiles => profiles?._id === _id);

  const handleAcceptBooking = (secretCode) => {
    const putMethod = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      body: JSON.stringify({
        secretCode: secretCode
      }) // We send data in JSON format
    };
    fetch('http://localhost:3000/api/booking/accepted',
      putMethod).then(res => window.location.href = "/home");
  };
  const handleRejectBooking = (secretCode) => {
    const putMethod = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
      },
      body: JSON.stringify({
        secretCode: secretCode
      }) // We send data in JSON format
    };
    fetch('http://localhost:3000/api/booking/rejected',
      putMethod).then(res => window.location.href = "/home");
  };

  const time = (checkInTime) => {
      var nmmber = Number.parseInt(checkInTime);
      var date = new Date(nmmber);
      return date.toLocaleString();
}

  return (
    <div className="container-fluid row">
      <Navbar></Navbar>
      <div className=" p-5 text-center">

        <h1>  {orderList?.name}</h1>

        <p className='text-secondary'> <b>Contact No: </b>{orderList?.phone}</p>
        <p className='text-secondary'> <b>Email: </b>{orderList?.email}</p>
        <p className='text-secondary'> <b>Address: </b> {orderList?.address}</p>
        <p className='text-secondary'> <b>CheckInTime: </b> {time(orderList?.checkInTime)}</p>
        <p className='text-secondary'> <b>CheckOutTime: </b>{time(orderList?.checkOutTime)}</p>
        <div className=''>
          <button onClick={() => handleAcceptBooking(orderList._id)} className="btn btn-success">accept</button>
          <button onClick={() => handleRejectBooking(orderList._id)} className="btn btn-danger m-3">Reject</button>
        </div>

      </div>


    </div>
  );
}

export default OrderDetails;