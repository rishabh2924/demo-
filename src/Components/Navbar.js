import React from 'react';
import './Navbar.css'
import logo from '../assets/logo.svg'
function Navbar() {
  return (
    <nav className="navbar">
     
       
        <ul className="navbar-links">
        <li>
        <a className="navbar-logo" href="/">
          <img src={logo} alt="" />
        </a></li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/about">Invest</a>
          </li>
          <li>
            <a href="/services">Community</a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
          <li>
           <button className='button'>Early Access</button>
          </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;