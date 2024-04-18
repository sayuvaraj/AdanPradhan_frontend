import React, { useState } from 'react';
import './RateUsPage.css';
import ReviewPage from './ReviewPage';
import Footer from './Footer';
import HeaderAfterLogin from './component/HeaderAfterLogin';
import CongratsParticles from './CongratsParticles'; // Import the CongratsParticles component

const RateUsPage = () => {
    const [rating, setRating] = useState(0); // State to store rating
    const [showMessage, setShowMessage] = useState(false); // State to manage message visibility

    // Function to handle rating selection
    const handleRatingChange = (value) => {
        setRating(value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here, e.g., send the rating to a server
        console.log('Rating submitted:', rating);
        // Optionally, reset the rating state after submission
        setRating(0);
        // Show thank you message to the user
        setShowMessage(true);
        // Optionally, hide the message after a certain duration
        setTimeout(() => {
            setShowMessage(false);
        }, 3000); // Adjust the duration as needed
    };

    return (
        <>
            <section>
                <HeaderAfterLogin/>
            </section>
            <CongratsParticles/>
            <div className="rate-us-container-wrapper">
                <div className="rate-us-container">
                    <h1 className="rate-us-header">Rate Our <span style={{color:'orange'}}>Services</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={value}
                                        onChange={() => handleRatingChange(value)}
                                    />
                                    <span
                                        className="star"
                                        role="img"
                                        aria-label="star" 
                                        style={{
                                            color: value <= rating ? "#fdd835" : "#ccc"
                                        }}
                                    >
                                        ★
                                    </span>
                                </label>
                            ))}
                        </div>
                        <button type="submit" className="submit-btn-rate">Submit Rating</button>
                    </form>
                </div>
                {/* Show thank you message */}
                {showMessage && (
                    <div className="thank-you-message">
                        Thank you for rating!
                    </div>
                )}
                <CongratsParticles style={{ position: 'absolute', bottom: '0', left: '0' }} /> {/* Render the CongratsParticles component with absolute positioning */}
            </div>
            <section style={{marginTop:'50px'}}>
                {/* <ReviewPage /> */}
                <Footer/>
            </section>
        </>
    );
};

export default RateUsPage;
