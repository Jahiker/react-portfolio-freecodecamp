import React from 'react'
import './index.scss'
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"

import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to="/" >
        <img src={ LogoS } alt="Logo" />
        <img src={ LogoSubtitle } className="sub-logo" alt="Subtitle" />
      </Link>
    </div>
  )
}

export default Sidebar