import React from 'react';
import "./Logo.css";
import logo from '../../../media/logo256.png'

function Logo() {
  return (
    <img className="Logo" src={logo} alt="logo" />
  )
}

export default Logo;
