// ClgSignup.js

import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './ClgSignup_style.module.css'; // Import CSS module

const ClgSignup = () => {
  const navigate = useNavigate();
  const [clgname, setClgname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://adan-pradhan-backend.vercel.app/api/clg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clgname,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        handleLoginClick();
        //navigate('/working_login');
      } else {
        setError(data.message || 'College registration failed');
      }
    } catch (error) {
      setError('An error occurred while registering');
    }
  };

  const handleLoginClick = () => {
    console.log("login clicked" );
    navigate('/working_login', { state: { tabNumber: 2 } });
};
  return (
    <>
    <section>
      <div className={styles.signupContainer}>
        <h2 style={{marginBottom:'20px'}}>College Registration</h2>
        <input
          className={styles.clgForminputs}
          type="text"
          placeholder="College Name"
          value={clgname}
          onChange={(e) => setClgname(e.target.value)}
        />
        <input
          className={styles.clgForminputs}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.clgForminputs}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className={styles.clgForminputs}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
          <button className={styles.registerButton} onClick={handleRegister}>Register</button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <p>Already a member ? <button onClick={handleLoginClick}>Login</button></p>
        <p>Already have an account? <NavLink to={{ pathname: '/working_login', state: { tabIndex: 2 } }}>Login</NavLink></p>
      </div>
    </section>
   
   

    </>
  );
}

export default ClgSignup;
