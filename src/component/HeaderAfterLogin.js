import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderAfterLogin.css"; // Import CSS file for styling
import logo from '../images/collegelogowithtwo.png';
const HeaderAfterLogin = () => {
  // State for toggling the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar-after-login">
      <div className="logo-after-login">
      
      <img src={logo} alt="Logo" />
     
      </div>
     
      <ul className={`nav-links-after-login ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/homeStu" className="nav-link-after-login">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/workshops" className="nav-link-after-login">
            Workshops
          </NavLink>
        </li>
        <li>
          <NavLink to="/userbookings" className="nav-link-after-login">
            Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to="/faqs" className="nav-link-after-login">
            FAQS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link-after-login">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link-after-login">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="nav-link-after-login">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/logOut" className="nav-link-after-login">
            LogOut
          </NavLink>
        </li>
      </ul>
      {/* Hamburger menu for smaller screens */}
      <div
        className={`menu-toggle-after-login ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="hamburger-after-login"></div>
      </div>
    </nav>
  );
};

export default HeaderAfterLogin;
