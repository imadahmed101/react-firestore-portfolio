import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" className='navbaritem'>Home</Link>
        <Link to="/dashboard"className='navbaritem'>Dashboard</Link>
        <Link to="/portfolio"className='navbaritem'>Portfolio</Link>
    </div>
  )
}

export default Navbar