import React, { useState, useEffect } from 'react';
import HeaderAfterLogin from './component/HeaderAfterLogin';
import './UserBookingsStyle.css'; // Import your CSS file for styling
import Footer from './Footer';
import LoadingAnimation from './LoadingAnimation';
import { useNavigate } from 'react-router-dom';
import Nodata from './Nodata'; // Import the Nodata component
import Deleted from './Deleted';

const UserBookings = () => {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true); // State to track loading status

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('https://adan-pradhan-backend.vercel.app/api/student/bookings', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Sort bookings in descending order based on date
                const sortedBookings = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setBookings(sortedBookings);
            } else {
                console.error('Failed to fetch bookings:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching is done
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const isPastDate = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        return date <= today;
    };

    const handleDelete = async (bookingId, index) => {
        console.log(bookingId);
        try {
            const response = await fetch(`https://adan-pradhan-backend.vercel.app/api/student/delete/booking/${bookingId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('token')
                }
            });
            if (response.ok) {
                // If deletion is successful, update the state to remove the deleted booking
                const updatedBookings = [...bookings];
                updatedBookings.splice(index, 1); // Remove the deleted booking from the array
                setBookings(updatedBookings);
                setSuccessMessage('Booking cancelled successfully');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000); // Hide the success message after 5 seconds
            } else {
                const errorData = await response.json(); // Extract error message from response body
                throw new Error(errorData.message); // Throw the error message
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
            setErrorMessage(error.message); // Set error message
        }
    };

    const renderShareExperienceButton = (bookingDate, isReviewed) => {
        const today = new Date();
        const booking = new Date(bookingDate);
        return !isReviewed && today > booking;
    };

    const handleShareExperienceClick = (bookingId) => {
        navigate('/reviewpage', { state: { bookingId: bookingId } });
    };
    const handleExplore= () =>{
        navigate('/workshops');
    }
    return (
        <>
            <HeaderAfterLogin />
            {loading ? (
                <LoadingAnimation />
            ) : (
                <>
                    <div className="important-update-container">
                        <div className="scrolling-text">
                            <h2>Important Update</h2>
                            <p>Please note that cancellations are only accepted up to one day before the workshop date. Plan accordingly! 🗓️"</p>
                        </div>
                    </div>
                    {bookings.length === 0 ? ( // Check if bookings array is empty
                    <>
                        <section style={{display:'flex',justifyContent:'center',backgroundColor:'black',color:'yellow',fontSize:'40px'}}><Nodata /> </section>
                       
                       <div><p style={{color:'#600f5c',fontSize:'30px',textAlign:'center'}}>"The journey begins now! Book your first experience." <button onClick={handleExplore} className="explore-button">Explore Now</button>  </p> </div>
                   
                   </>
                    ) : (
                        <div className="user-bookings-container">
                            <h2>Your Bookings</h2>
                            {successMessage && <p style={{ color: 'green', fontSize: '21px', textAlign: 'center', marginTop: '30px' }}>{successMessage} <Deleted/></p>}
                            {errorMessage && <p style={{ color: 'red', fontSize: '21px', textAlign: 'center', marginTop: '30px' }}>{errorMessage}</p>}
                            {bookings.map((booking, index) => (
                                <div key={index} className="booking-box">
                                    <div className="booking-prefix">
                                        <p>Booking {index + 1}:</p>
                                    </div>
                                    <div className="booking-details">
                                        <p>You booked Course <strong>{booking.courseName}</strong> in college <strong>{booking.collegeName}</strong> on {formatDate(booking.date)} with {booking.slotTimings} slot</p>
                                        <div className="button-container-user-bookings">
                                            <button className="delete-button" disabled={isPastDate(booking.date)} onClick={() => handleDelete(booking.bookingId, index)}>Cancel</button>
                                            {renderShareExperienceButton(booking.date, booking.isReviewed) && (
                                                <button className="share-experience-button" onClick={() => handleShareExperienceClick(booking.bookingId)}>Feedback</button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
            {!loading && <Footer />}
        </>
    );
};

export default UserBookings;
