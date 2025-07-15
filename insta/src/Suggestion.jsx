// import { response } from 'express';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Suggestion() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

useEffect(()=>{
    fetch('http://localhost:3001/profile')
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch((err)=> console.log(err))


    fetch('http://localhost:3001/suggestions')
    .then(data => data.json())
    .then(data => setSuggestions(data))
    .catch(err => console.log(err))
},[])


 const handleFollow = async(id, username) =>{
       axios.post('http://localhost:3001/followers',{"id" : id, "username" : username})
       .then(alert("Followed"))
       .catch(err => console.log(err))
 }

  return (
    <div className='sug' >
      <div className='suggestion w-75 m-4'>
      { profile ?
        <div className='d-flex gap-1'>
          <img className='dp rounded-circle' src={`/src/assets/${profile.profilePic}`} alt={profile.caption} />
          <h5>{profile.username}</h5>
          <small className='ms-auto text-primary'>Switch Account</small>
          
           
      </div>
      
      : <p>Loading</p>
      
      }
      <br /><br /><br />
      <div>
      <p>Suggested for you &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>See All</b></p> 
      
      
        
      <div className='d-flex'>
        </div>
        
        <div className='my-5 '>
        { suggestions.length>0 ? (
            <div>
            {suggestions.map((suggest)=>(
                <div className='my-1' key={suggest.id}>
                    <div className='d-flex gap-2'>
                        <img className='dp rounded-circle' src={`/src/assets/${suggest.profilePic}`} alt={suggest.caption} />
                        <h5>{suggest.username}</h5>
                        <a className='subin text-primary ms-auto' onClick={()=>handleFollow(suggest.id,suggest.username)}>Follow</a>
                    </div>
                  
                </div>
            ))}
            </div>
        ) : (
            <div>Loading</div>
        )
    }
    </div>
      </div>
      </div>
    </div>
  )
}

export default Suggestion