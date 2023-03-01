import React from 'react'
import arrow from "../assets/arrow.svg";

const Navbar = ({menuOpen, handleBackClick}) => {
  return (
    <div className='left-col'>
        <nav style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <img
            src={arrow}
            className="back-btn"
            onClick={handleBackClick}
            alt="back"
          />
          <ul className="nav-title">
            <li><a href="index.html" className="active"> Home</a></li>
            <li><a href="/">My Stats</a></li>
            <li><a href="/">Members</a></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/">Help</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar