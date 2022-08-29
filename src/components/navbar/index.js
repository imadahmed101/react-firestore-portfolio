import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" className='navbaritem'>Home</Link>
        <Link to="/dashboard"className='navbaritem'>Dashboard</Link>
        <Link to="/work"className='navbaritem'>Work</Link>
    </div>
  )
}

export default Navbar