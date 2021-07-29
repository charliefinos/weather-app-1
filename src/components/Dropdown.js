import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Dropdown.scss'

const Dropdown = ({ toggle, navbarToggle }) => {
  return (
    <div onClick={navbarToggle} className={`${toggle ? 'show' : 'hide'}`} >
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div >
  )
}
export default Dropdown
