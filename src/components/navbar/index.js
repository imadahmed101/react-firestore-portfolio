import React from 'react'
import { Link } from 'react-router-dom'
//import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className='navbaritem'>Portfolio</span>
        <Link to="/" className='navbaritem'>Home</Link>
        <Link to="/dashboard"className='navbaritem'>Dashboard</Link>
    </div>
  )
}

export default Navbar