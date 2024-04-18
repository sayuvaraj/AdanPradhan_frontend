// Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ClgLoginStyle.css'; // Import CSS file
import { useAuth } from './AuthContext'; // Import useAuth hook
const Login = () => {
    const { clgLogin} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try { 
            const response = await fetch('https://adan-pradhan-backend.vercel.app/api/clg_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                clgLogin(data.clg_token);
                // localStorage.setItem('clg_token', data.clg_token);
                navigate('/runningworkshops');
                console.log("data is valid,  college login  succesfully  ")
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred while logging in');
        }
    };
    const handleRegisterClick = () => {
        navigate('/WorkingSignup', { state: { tabNumber: 2 } });
    };

    return (
        <div className="login-container">
            <h2 style={{marginBottom:'30px'}}>College Login</h2>
            <input
                className="login-input"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={handleLogin}>Login</button>
            {error && <p className="login-error">{error}</p>}
            <p>Not a member yet ? <button onClick={handleRegisterClick}>Register</button></p>
            {/* <p>Don't have an account? <a href="/WorkingClgSignUp">Register</a></p> */}
            <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p>
        </div>
    );
};

export default Login;
