import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import './Profile.css'; // Import the CSS file
import HeaderAfterLogin from './component/HeaderAfterLogin';
import CourseImage from './images/Profilepic1.jpeg';
import Footer from './Footer';

const Profile = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactNo: '',
    collegeName: ''
    // Add other fields as needed
  });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/user/profile/${token.userId}`, {
          headers: {
            'token': `${localStorage.getItem('token')}`
          }
        });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          setFormData({
            username: userData.username,
            email: userData.email,
            contactNo: userData.contactNo,
            collegeName: userData.collegeName
            // Update other fields if needed
          });
        } else {
          setError('Failed to fetch user details');
        }
      } catch (error) {
        setError('Error fetching user details');
      } finally {
        setError('');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [token]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/user/profile/${token.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'token': `${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('User details updated successfully');
        setEditing(false);
      } else {
        setError('Failed to update user details');
      }
    } catch (error) {
      setError('Error updating user details');
    }
  };

  return (
  <>
  <section>
    <HeaderAfterLogin/>
  </section>
    <div className="profile-container">
      <h2 className="profile-header">User <span style={{color:'orange'}}>Profile</span></h2>
      {/* <center><p className="person-symbol" style={{color:"black", width:'20px',height:'20px'}}>👤</p></center> */}
      <cemter></cemter>
      <div  style={{marginTop:'22px',display:'flex',justifyContent:'center'}}><img  src={CourseImage} alt="Course" width={'150px'} /></div>
      <p style={{color:'#990a69',textAlign:'center'}}>"Manage your profile with ease."</p>
      {loading && <p id="loading-message">Loading...</p>}
      {error && <p id="error-message">{error}</p>}
      {user && !editing && (
        <div className="profile-details">
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Contact No: {user.contactNo}</p>
          <p>College Name: {user.collegeName}</p>
          <div style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
          <button className="profile-edit-button profile-button" onClick={() => setEditing(true)}>Edit Details</button>
       
            </div>
          {/* <button className="profile-edit-button" onClick={() => setEditing(true)}>Edit Details</button> */}
        </div>
      )}
      {editing && (
        <form className="profile-form" onSubmit={handleSubmit}>
          <div>
            <label className="profile-form-label" htmlFor="username">Username:</label>
            <input
              className="profile-input"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="profile-form-label" htmlFor="email">Email:</label>
            <input
              className="profile-input"
              type="email"
              id="email"
              name="email"
              readOnly
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="profile-form-label" htmlFor="contactNo">Contact No:</label>
            <input
              className="profile-input"
              type="text"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="profile-form-label" htmlFor="collegeName">College Name:</label>
            <input
              className="profile-input"
              type="text"
              id="collegeName"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleInputChange}
            />
          </div>
          <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'50px'}}>
            <div>
            <button   className="profile-button profile-submit-button-style " type="submit">Update Profile</button>
         
            </div>
            <div>
            <button className="profile-button profile-cancel-button" type="button" onClick={() => setEditing(false)}>Cancel</button>
       
            </div>

          </div>
          <button  id="profile-submit-button-style" className="profile-button " type="submit">Update Profile</button>
          </form>
      )}
    </div>
    <section style={{marginTop:'50px'}}>
      <Footer/>
    </section>
    </>
  );
};

export default Profile;
