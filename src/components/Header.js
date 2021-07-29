import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.scss'

const Header = ({ navbarToggle }) => {
  return (
    <nav className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <h2>Weather-App</h2>
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <div onClick={navbarToggle} className='header__mobile__menu'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </nav>
  )
}

export default Header
