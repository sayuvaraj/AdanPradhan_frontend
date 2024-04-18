import React, { useState } from 'react';
import './Contact_style.css'; // Import CSS file for styling
import HeaderAfterLogin from './component/HeaderAfterLogin';
import Footer from './Footer.js';
import Lottie from "lottie-react";
import SamplePic from './SampleMessage.json';
import WeareHere from './WeareHere.js';


const Contact = () => {
  // State variables to store form data and animation state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });
  const [isMessageSent, setIsMessageSent] = useState(false); // State to track if message is sent

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const response = await fetch('https://adan-pradhan-backend.vercel.app/adan/sendQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // If message is successfully sent, set isMessageSent to true
        setIsMessageSent(true);
        // Clear form fields after submission
        setFormData({
          name: '',
          email: '',
          address: '',
          message: ''
        });
      } else {
        // If there's an error sending the message, display error message
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      
      <div>
        <img src="/Contactusimage.png" className='contactimage  animate__animated  animate__swing' alt="Contact image" />
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><WeareHere/><span style={{fontSize:'50px',color:'orange'}}>We are here</span>  </div>
      <div className='contact-text-para'>
           {/* <h2 className='contact-we-are-here'> We are here </h2> */}
        <p id="contact-text">"We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello, feel free to reach out to us using the form below or contact information provided."</p>
      </div>
      <div className="contact-container">
        <div className="contact-section">
          <div className="contact-box">
            <h2 className="contact-heading">Phone No</h2>
            <p className="contact-details">123456789</p>
          </div>
          <div className="contact-box">
            <h2 className="contact-heading">Email</h2>
            <p className="contact-details">adanpradhan@gmail.com</p>
          </div>
          <div className="contact-box">
            <h2 className="contact-heading">Address</h2>
            <p className="contact-details">Pune, Maharashtra</p>
          </div>
        </div>
        <div className="large-box">
          <h2 className="large-heading">Get in touch</h2>
          <p id="contact-text">"We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to say hello !!!"</p>
          <form onSubmit={handleSubmit}>
            <div className="contact-section">
              <div className="contact-box">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="input-field" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact-box">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="input-field" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="contact-box">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" id="address" className="input-field" placeholder="Address" value={formData.address} onChange={handleChange} />
                </div>
              </div>
            </div>
            {isMessageSent && (
      <Lottie animationData={SamplePic} className="animation" style={{width:'auto',height:'200px',marginBottom:'10px'}} loop={false} onComplete={() => setIsMessageSent(false)} />
    )}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="textarea-field" placeholder="Type your message here" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <div style={{marginBottom:'2px'}}>
         
          </div>
            <button type="submit" className="btn-send">Send Message</button>
          </form>
          <div>
          {/* {isMessageSent && (
      <Lottie animationData={SamplePic} className="animation" style={{width:'auto',height:'200px',marginBottom:'280px'}} loop={false} onComplete={() => setIsMessageSent(false)} />
    )} */}
          </div>
          
        </div>
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
