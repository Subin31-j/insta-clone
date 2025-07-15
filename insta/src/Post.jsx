import React, { useEffect, useState } from 'react';

function Post() {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3001/posts')
    .then((res) => res.json())
    .then((data) => setPosts(data) )
    .catch((err) => console.log(err))
    },[])
  return (
   <div className='d-flex justify-content-center'>
    
        { posts.length>0 ? (
            <div>
            {posts.map((post)=>(
                <div className='my-3' key={post.id}>
                    <div className='d-flex gap-2'>
                        <img className='dp rounded-circle' src={`/src/assets/${post.image}`} alt={post.caption} />
                        <h5>{post.username}</h5>
                    </div>
                    <img className='post' src={`/src/assets/${post.image}`} alt="" />
                    <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <b>{post.likes} Likes</b>
                    <p>{post.caption}</p>
                </div>
            ))}
            </div>
        ) : (
            <div>Loading</div>
        )
    }
   </div> 
  )
}

export default Post