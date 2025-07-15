import React, { useEffect } from 'react'
import { useState } from 'react';
function Stories() {

  const [stories, setStories] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:3001/stories')
      .then(data => data.json())
      .then(data=> setStories(data))
      .catch(err => console.log(err))
  }, [])
  return (
   
    <div className='story d-flex gap-2 m-1'>
      {
        stories.length > 0 ?
        (
           stories.map((store)=>(
            <div key={store.id}>
              <div className="gradient-border">
              <img className='story-dp rounded-circle' src={`src/assets/${store.profilePic}`} alt="" />
              </div>
              <p className='text-truncate' style={{width:"80px"}}>{store.username}</p>
            </div>
           ))
        ) : (
          <p>Loading</p>
        )
      }
    </div>
  )
}

export default Stories