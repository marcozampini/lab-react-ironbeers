import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <Link to="/" className="home-link"></Link>
      <Outlet />
    </div>
  )
}

export default Header
