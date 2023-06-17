import './Logo.scss'
import logo from '../../../assets/images/jm-logo.png'

import React from 'react'

const Logo = () => {
  return (
    <div className='logo-container'>
        <img src={logo} alt="logo" />
      
    </div>
  )
}

export default Logo
