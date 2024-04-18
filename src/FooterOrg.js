import React from 'react';
import './Footer_style.css';
import HeaderAfterLogin from './component/HeaderAfterLogin';
function Footer() {
  return (
    <>
    <HeaderAfterLogin/>
    <footer className="footer">
     <center>
    <h1 style={{ color: '#163046', fontSize: '66px' }}>Adan Pradhan</h1>
    "Empowering Futures, One Step at a Time - Adan Pradhan"
     </center>
      <div className="footer-container">
     
        <div className="footer-heading">
          <h2>Adan Pradhan</h2>
          <p>"Empowering Futures, One Step at a Time - Adan Pradhan"</p>
        </div>
        <div className="footer-info">
          <h3>Contact Information</h3>
          <p>Email: info@adanpradhan.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street Name, City, Country</p>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/workshops">Workshops</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
