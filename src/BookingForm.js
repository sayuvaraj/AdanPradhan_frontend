import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingForm_style.css'; // Import your CSS file for styling
import HeaderAfterLogin from './component/HeaderAfterLogin';
import './component/Header.css';
import Footer from './Footer';
import { useAuth } from './AuthContext'; // Import useAuth hook

const BookingForm = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { token } = useAuth(); // Access token from the AuthContext

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '', // Default value is an empty string
        slotTimings: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch user details using the token
        const fetchUserDetails = async () => {
            try {
                // const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/user/${token}`, {
                    const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/user/${token}`, {
                    headers: {
                        'token': localStorage.getItem('token'),
                        // 'token': `${localStorage.getItem('token')}`
                         // Pass the token in the request headers
                    }
                });
                if (response.ok) {
                    const userData = await response.json();
                    // Set name and email from user data
                    setFormData(prevData => ({
                        ...prevData,
                        name: userData.username,
                        email: userData.email
                    }));
                } else {
                    // Handle error if failed to fetch user details
                    console.error('Failed to fetch user details');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, [token]); // Fetch user details when token changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://adan-pradhan-backend.vercel.app/api/user/user_post/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    ...formData,
                    collegeName: location.state.collegeName,
                    courseOffered: location.state.courseOffered,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Booking successful');
                setTimeout(() => {
                    setSuccessMessage('');
                    // Navigate to RateusPage component after 3 seconds
                    navigate('/thankbooking');
                }, 3000);
            } else {
                setErrorMessage(data.message || 'Booking failed');
                setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 3 seconds
            }
        } catch (error) {
            setErrorMessage('An error occurred while submitting booking');
            setTimeout(() => setErrorMessage(''), 3000); // Clear error message after 3 seconds
        }
    };

    // Function to get tomorrow's date
    const getTomorrowDate = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        let nextAvailableDate = new Date(today);
        // Check if today is Saturday or Sunday
        if (dayOfWeek === 6) { // Saturday
            nextAvailableDate.setDate(today.getDate() + 2); // Add 2 days to get to Monday
        } else if (dayOfWeek === 0) { // Sunday
            nextAvailableDate.setDate(today.getDate() + 1); // Add 1 day to get to Monday
        } else { // Any other day (Monday to Friday)
            nextAvailableDate.setDate(today.getDate() + 1); // Add 1 day to get to tomorrow
        }
        return nextAvailableDate.toISOString().split('T')[0];
    };

    // Function to handle date change
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 6 || dayOfWeek === 0) { // Saturday or Sunday
            setErrorMessage('Bookings are available from Monday to Friday only.');
            setTimeout(() => setErrorMessage(''), 3000);
        } else {
            setErrorMessage(''); // Clear error message if the selected date is valid
        }
        handleChange(e);
    };
    return (
        <>
            <HeaderAfterLogin />
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="orange" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,181.3C480,160,600,96,720,90.7C840,85,960,139,1080,154.7C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>
            <div className="booking-inspiration">
                <h2 className='unlock-text'>Unlock <span style={{ color: 'orange' }}>Your Potential</span></h2>
                <p>Join us and embark on a journey towards success. Book your slot now and take the first step towards a brighter future!</p>
            </div>
            <div className="booking-form-container">

                <h2>Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}  disabled required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" value={formData.date} min={getTomorrowDate()} onChange={handleDateChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="slotTimings">Slot Timings:</label>
                        <select id="slotTimings" name="slotTimings" value={formData.slotTimings} onChange={handleChange} required>
                            <option value="">Select Slot Timings</option>
                            <option value="9:00 AM-12:00 PM">9:00 AM - 12:00 PM</option>
                            <option value="2:00 PM-5:00 PM">2:00 PM - 5:00 PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="collegeName">College:</label>
                        <input type="text" name="collegeName" value={location.state.collegeName} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="courseOffered">Course Offered:</label>
                        <input type="text" name="courseOffered" value={location.state.courseOffered} readOnly />
                    </div>
                    <button type="submit" className='booking-sub-btn'>Submit</button>
                </form>
                {/* Success and error messages */}
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <section>
                <Footer />
            </section>
        </>
    );
};

export default BookingForm;
