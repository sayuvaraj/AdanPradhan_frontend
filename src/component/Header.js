import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling
import logo from '../images/collegelogowithtwo.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-background"></div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink exact to="/" className="nav-link" onClick={toggleMenu}>
           <strong>Home</strong> 
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>
          <strong>Contact</strong> 
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" onClick={toggleMenu}>
          <strong>About</strong> 
          </NavLink>
        </li>
        <li>
          <NavLink to="/working_login" className="nav-link" onClick={toggleMenu}>
          <strong>Login</strong> 
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
