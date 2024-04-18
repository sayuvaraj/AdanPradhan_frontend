import React from 'react';
import './Footer_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import HeaderAfterLogin from './component/HeaderAfterLogin';

function Footer() {
  return (
    <>
      {/* <HeaderAfterLogin /> */}
      <footer className="footer">
        <center>
        <h1 style={{ color: 'rgb(185, 83, 17)', fontSize: '50px' }}>Adan Pradhan</h1>

          <p>"Empowering dreams, igniting passions, and shaping destinies, one step at a time - Adan Pradhan"</p>
        </center>
        <div className="footer-container">
          <div className="footer-heading">
            <div className="heading-item">
              <h2 style={{color:'orange'}}>Adan Pradhan</h2>
              <p>Building Bridges to Brighter Futures</p>
            </div>
            <div className="heading-item">
              <h3>Contact Information</h3>
              <p>Email: info@adanpradhan.com</p>
              <p>Phone: +1234567890</p>
              <p>Address: 123 Street Name, City, Country</p>
            </div>
            <div className="heading-item">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/workshops">Workshops</a></li>
                <li><a href="/about">About Us</a></li>
                {/* <li><a href="/contact">Contact Us</a></li> */}
              </ul>
            </div>
          </div>
          <div className="follow-icons">
            <h3>Follow us</h3>
            <div className="icon-link">
              <a href="https://github.com/sayuvaraj/adanproject.git">
                <FontAwesomeIcon icon={faGithub} size="3x" />
                <p>GitHub</p>
              </a>
              <a href="https://github.com/sayuvaraj/adanproject.git">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
                <p>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;