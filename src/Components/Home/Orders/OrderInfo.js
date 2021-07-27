import React, { } from 'react';
import { Link } from 'react-router-dom';
import './OrderInfo.css'


const OrderInfo = ({newPost}) => {
 

    const statusColor = (status) => {
        if (status === "Pending")
            return "btn btn-warning "
        if (status === "Cancell" ||status === "Cancelled" )
            return "btn btn-info"
        if (status === "Booked")
            return "btn btn-success"
        if (status === "Rejected")
            return "btn btn-danger "
    }

    return (
    
    <div class="blogs blog-content col-xl-3 col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
        <div class="card-body">
            <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                <Link style={{textDecoration:'none'}}  to={`/OrderDetails/${newPost._id}`}>
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    <h3 className="text-dark text-center">{newPost.name}</h3>
                    </div>
                    <div style={{display:'inline'}} class="h5 mb-0 font-weight-bold text-gray-800">
                    <p className='text-secondary  text-center'> <b>Email     : </b>{newPost.email}</p>
                    <p className='text-secondary  text-center'> <b>Contact No: </b>{newPost.phone}</p>
                    <div className='row '>
                        <div  className='text-center p-2'>
                       
                        
                        
                         <button className={statusColor(newPost.status)} >{newPost.status}</button>
                       
                     
                     
                        </div>
                    
                        </div>
                    </div>
                    </Link>
                </div>
               
            </div>
        
        </div>
    </div>
</div>
   
   
    
    );
};

export default OrderInfo;