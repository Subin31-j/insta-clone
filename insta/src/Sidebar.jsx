import React from 'react'
import logo from './assets/real.png'
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  return (
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3'>
        <img className='logo-text' src={logo} alt="loading" />
        <div><i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass-fill"></i>Explore</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-chat-left-dots"></i>Message</div>
        <div><i className="bi bi-bell"></i>Notification</div>
        <div><i className="bi bi-plus-circle"></i>Create</div>
        <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className='position-fixed bottom-0 d-flex flex-column gap-3'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar;