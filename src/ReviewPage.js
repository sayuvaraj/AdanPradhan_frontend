import React, { useState, useEffect } from 'react';
import './ReviewPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth hook
import HeaderAfterLogin from './component/HeaderAfterLogin';
import Footer from './Footer';
import ReviewAnim from './ReviewAnim';
import ThankRespon from './ThankRespon'; // Import ThankRespon component

const ReviewPage = () => {
    const location = useLocation();
    const bookingId = location.state.bookingId;
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { token } = useAuth(); // Access token from the AuthContext
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0); // State to store rating
    const [college, setCollege] = useState('');
    const [courseName, setCourseName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
    const [showAnimation, setShowAnimation] = useState(false); // Track if the animation should be shown

    useEffect(() => {
        // Fetch user details using the token
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/user/${token.userId}`, {
                    headers: {
                        'token': token // Pass the token in the request headers
                    }
                });
                if (response.ok) {
                    const userData = await response.json();
                    // Set name and email from user data
                    setName(userData.username);
                    setEmail(userData.email);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Fetch booking details to get college and course name
            const bookingResponse = await fetch(`https://adan-pradhan-backend.vercel.app/api/user/bookings/getdetails/${bookingId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            });

            if (!bookingResponse.ok) {
                throw new Error('Failed to fetch booking details');
            }

            const bookingData = await bookingResponse.json();
            const {collegeName, courseOffered}=bookingData;
            const college=collegeName;
            const courseName=courseOffered;

            // Send feedback data to the backend API along with the bookingId
            const response = await fetch('https://adan-pradhan-backend.vercel.app/api/user/course-reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify({ 
                    name, 
                    email, 
                    review, 
                    rating, 
                    college, 
                    courseName, 
                    bookingId 
                }) 
            });
         
            if (response.ok) {
                // If feedback is successfully submitted, set isSubmitted to true
                setIsSubmitted(true);
                setShowAnimation(true); // Show animation
                // Reset form fields after submission
                setName('');
                setEmail('');
                setReview('');
                setRating(0);
            } else {
                // If there's an error submitting feedback, display error message
                console.error('Failed to submit feedback');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            console.error('Failed to submit feedback');
        }
    };

    useEffect(() => {
        let redirectTimeout;
        if (isSubmitted && showAnimation) {
            // Redirect to workshops page after 5 seconds
            redirectTimeout = setTimeout(() => {
                navigate('/workshops');
            }, 5000);
        }

        return () => clearTimeout(redirectTimeout); // Cleanup timeout on unmount
    }, [isSubmitted, showAnimation, navigate]);

    return (
        <>
            <HeaderAfterLogin />
            <div className="review-container animated fadeIn">
                <div style={{display:'flex'}}><div><ReviewAnim/></div>   </div>
                <h1 style={{textAlign:'center'}} className="review-header-review">Share Your<span style={{ color: 'orange',textAlign:'center' }}> Experience</span></h1>
                <div className="congratulations animated fadeInLeft">
                    <p style={{ color: 'grey', fontStyle: 'italic' }}>Congratulations! You've successfully booked with us.</p>
                    <p>Now, please take a moment to share your experience with us.</p>
                </div>
                <form onSubmit={handleSubmit} className="review-form animated fadeInRight">
                    <div className="form-group-review">
                        <label htmlFor="name" className="form-label-review">Name</label>
                        <input type="text" id="name" className="form-input-review" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group-review">
                        <label htmlFor="email" className="form-label-review">Email</label>
                        <input type="email" id="email" className="form-input-review" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group-review">
                        <label htmlFor="review" className="form-label-review">Review</label>
                        <textarea id="review" className="form-textarea-review" value={review} onChange={(e) => setReview(e.target.value)} required></textarea>
                    </div>
                    {/* Rating Section */}
                    {isSubmitted && showAnimation && (
                    <div className="animation-container">
                        <ThankRespon />
                    </div>
                )}
                    <div className="form-group-review">
                        <label htmlFor="rating" className="form-label-review">Rating</label>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <label key={value}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={value}
                                        checked={value === rating}
                                        onChange={() => setRating(value)}
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
                        {/* {isSubmitted && showAnimation && (
                    <div className="animation-container">
                        <ThankRespon />
                    </div>
                )} */}
                    </div>
                    <div className="button-container" >
                        <button type="submit" className="submit-btn-review">Submit Review</button>
                    </div>
                </form>
                {/* {isSubmitted && showAnimation && (
                    <div className="animation-container">
                        <ThankRespon />
                    </div>
                )} */}
            </div>
            <section style={{marginTop:'50px'}}>
                <Footer/>
            </section>
        </>
    );
};

export default ReviewPage;
