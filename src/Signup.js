import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Signup.css'; // Import CSS file

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false); // State for terms acceptance
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Clear error message after 3 seconds
    const timer = setTimeout(() => {
      setError('');
    }, 3000);

    // Clean up timer when component unmounts or error changes
    return () => clearTimeout(timer);
  }, [error]);

  const handleRegister = async () => {
    try {
      // Check if terms are accepted
      if (!acceptedTerms) {
        setError('Please accept the terms and conditions');
        return;
      }

      const response = await fetch('https://adan-pradhan-backend.vercel.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          contactNo,
          collegeName
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful');
        setTimeout(() => {
          setMessage('');
          navigate('/working_login');
        }, 2000); // Redirect to login page after 4 seconds
      } else {
        setError(data.message || 'Registration failed');
        setTimeout(() => setError(''), 5000); // Clear error after 5 seconds
      }
    } catch (error) {
      setError('An error occurred while registering');
      setTimeout(() => setError(''), 5000); // Clear error after 5 seconds
    }
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms); // Toggle the state of the checkbox
  };

  return (
    <>
      <section>
        <div className="signup-container">
          <h2 className="headingStudentlogin">Registration</h2>
          <input
            id="forminputs"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="forminputs"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="forminputs"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // Disable password input
          />
          <input
            id="forminputs"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          // Disable password confirmation input
          />
          <input
            id="forminputs"
            type="text"
            placeholder="Contact No"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <input
            id="forminputs"
            type="text"
            placeholder="College Name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
          {/* Add the checkbox for terms acceptance */}
          <div>
            <input
              type="checkbox"
              id="terms-checkbox"
              checked={acceptedTerms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms-checkbox">
              <span className="terms-text">
                I have read and agree to the 
                <NavLink to="/terms-and-conditions" className="terms-link"> terms and conditions</NavLink>
              </span>
            </label>
          </div>
          <div>
            <button className="loginbutn" onClick={handleRegister}>Register</button>
          </div>
          {error && <p className="error">{error}</p>}
          {message && (
            <div className="success-badge">
              <p>{message}</p>
            </div>
          )}
          <p>Already have an account? <NavLink to="/working_login">Login</NavLink></p>
        </div>
      </section>
    </>
  );
}

export default Signup;
