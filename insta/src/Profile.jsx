import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

function Profile() {

  const [profile, setProfile] = useState(null);
  const [followers, setFOllowers] = useState([]);
  const [unfollow, setUnfollow] = useState(0);

  useEffect(()=>{
    axios.get('http://localhost:3001/profile')
    .then(data => setProfile(data.data))
    .then(err => console.log(err))


    axios.get('http://localhost:3001/followers')
    .then(data => setFOllowers(data.data))
    .then(err => console.log(err))
    
  },[unfollow])

  function HandleOnChange(e){
    setProfile((prev=> ({
        ...prev,
        [e.target.name] : e.target.value
    })))
  }

  const HandleUpdate = async ()=>{
        axios.put('http://localhost:3001/profile', profile)
        .then(console.log('Updated'))
        .catch(err => console.log(err))
  }
  const HandleUnfollow = async (id) => {
    axios.delete(`http://localhost:3001/followers/${id}`)
    .then(alert('Unfollowed'))
    .then(setUnfollow(!unfollow))
    .catch(err => console.log(err))
  }
  
  return (
    <div className='m-5'>
        {profile ? (
            <div>
                <img className='profile rounded-circle' src={`src/assets/${"shan.jpg"}`} alt="" />
                <h5>{profile.username}</h5>
                <input type="text" className='form-control my-4' onChange={HandleOnChange} value={profile.username} name='username' />
                <input type="text" className='form-control' onChange={HandleOnChange} value={profile.profilePic} name='profilePic'/>
                <button className='btn btn-primary my-4' onClick={HandleUpdate} >Update</button>
            </div>
        ):(
            <div>Loading</div>
        )}
        {followers.length>0 ? (
             followers.map(follow => (
              <div key={follow.id} className='d-flex my-2'>
                
                {follow.username}
                <button className='btn btn-secondary ms-auto' onClick={()=>{HandleUnfollow(follow.id)}}>Unfollow</button>
              </div>
             ))
        ) : (
          <div>Loading</div>
        )}
    </div>
  )
}

export default Profile