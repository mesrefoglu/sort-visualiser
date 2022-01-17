import React from 'react';
import "./Logo.css";
import logo from '../../../media/logo256.png'

function Toolbar() {
  return (
    <img className="Logo" src={logo} alt="logo" />
  )
}

export default Toolbar;
