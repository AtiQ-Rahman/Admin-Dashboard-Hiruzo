import React, { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo';



const Profile = () => {
    const [newPosts, setNewPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/booking')
        .then(res => res.json())
        .then(data => setNewPosts(data))
    }, [])
    
    return (
        <div>
               <section className="justify-content-center  my-5 py-5 ">
        <div className="container ">
            <div className="section-header text-center">
             
               
            </div>
            <div className=" row  ">
                 {
                     newPosts.map(newPost => <ProfileInfo
                        newPost={newPost} key={newPost._id}/>)
                 }
             </div>
        </div>
    </section>
        </div>
    );
};

export default Profile;