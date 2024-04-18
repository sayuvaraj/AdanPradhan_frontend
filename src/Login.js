import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css'; // Import CSS module
import { useAuth } from './AuthContext'; // Import useAuth hook

const Login = () => {
    const { login } = useAuth(); // Access the login function from the AuthContext
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://adan-pradhan-backend.vercel.app/api/login', {
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
            if (response.ok) {
                // Call login function from AuthContext to set isAuthenticated to true
                login(data.token);
                setMessage('Login successful');
                navigate('/countdown');
            } else {
                setError(data.message || 'Login failed');
                setTimeout(() => {
                    setError('');
                }, 2000);
            }
        } catch (error) {
            setError('An error occurred while logging in');
        }
    };

    const handleRegisterClick = () => {
        navigate('/WorkingSignup', { state: { tabNumber: 1 } });
    };

    return (
        <>
            <div className="containerlogin">
                <h2 className="headingStudentlogin">Student Login</h2>
                <input
                    id='forminp'
                    type="text"
                    placeholder="Username or Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    id='forminp'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button id="loginstubutn" onClick={handleLogin}>Login</button>
                {error && (
                    <div className="error-badge">
                        <p className="message">{error}</p>
                    </div>
                )}

                {message && (
                    <div className="success-badge">
                        <p className="message">{message}</p>
                    </div>
                )}

                <p>Not a member yet ? <button onClick={handleRegisterClick}>Register</button></p>
                <p>Forgot your password? <a href="/forgot-password">Reset Password</a></p>
            </div>
        </>
    );
};

export default Login;
