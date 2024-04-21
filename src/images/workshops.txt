import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workshop_style.css'; // Import your CSS file for styling
import HeaderAfterLogin from './component/HeaderAfterLogin';
import Footer from './Footer';
import LoadingAnimation from './LoadingAnimation';
import BiggestCommunity from './BiggestCommunity';
import Star from './images/Starimage.png';

const CollegeDetails = () => {
  const navigate = useNavigate();
  const [collegeDetails, setCollegeDetails] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [ratingsAndReviews, setRatingsAndReviews] = useState({});


  const handleViewMore = (collegeName, courseOffered) => {
    navigate('/course-page', { state: { collegeName, courseOffered } });
  };
  // Fetch college details
  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
        const response = await fetch('https://adan-pradhan-backend.vercel.app/adanpradhanworkshops/user/workshops');
        if (response.ok) {
          const data = await response.json();
          setCollegeDetails(data);
        } else {
          console.error('Error fetching college details:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching college details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeDetails();
  }, []);

  // Fetch ratings and reviews for each college
  useEffect(() => {
    const fetchRatingsAndReviews = async () => {
      const ratingsAndReviewsData = {};
      for (const college of collegeDetails) {
        const { collegeName, courseOffered } = college;
        try {
          const url = `https://adan-pradhan-backend.vercel.app/adanpradhanworkshops/user/course-reviews?collegeName=${encodeURIComponent(collegeName)}&courseOffered=${encodeURIComponent(courseOffered)}`;
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            const totalReviews = data.length;
            const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
            const averageRating = totalRating / totalReviews;
            ratingsAndReviewsData[`${collegeName}_${courseOffered}`] = { averageRating, totalReviews };
          } else {
            console.error('Error fetching average rating and reviews:', response.statusText);
            ratingsAndReviewsData[`${collegeName}_${courseOffered}`] = { averageRating: 0, totalReviews: 0 };
          }
        } catch (error) {
          console.error('Error fetching average rating and reviews:', error);
          ratingsAndReviewsData[`${collegeName}_${courseOffered}`] = { averageRating: 0, totalReviews: 0 };
        }
      }
      setRatingsAndReviews(ratingsAndReviewsData);
    };

    if (!loading) {
      fetchRatingsAndReviews();
    }
  }, [loading, collegeDetails]);

  // Function to handle booking and navigate to BookingForm component
  const handleBooking = (collegeName, courseOffered) => {
    navigate('/booking-form', { state: { collegeName, courseOffered } });
  };

  return (
    <>
      <HeaderAfterLogin />
      <div className="page-container">
        {loading ? (
          <LoadingAnimation />
        ) : (
          <>
            <section style={{ height: '200px' }}>
              <BiggestCommunity />
            </section>
            <CollegeDetailsContainer
              collegeDetails={collegeDetails}
              ratingsAndReviews={ratingsAndReviews}
              handleBooking={handleBooking}
              handleViewMore={handleViewMore} // Pass handleViewMore as a prop
            />
          </>
        )}
        {!loading && <Footer />}
      </div>
    </>
  );
};

const CollegeDetailsContainer = ({ collegeDetails, ratingsAndReviews, handleBooking, handleViewMore }) => {
  // Function to chunk the array into smaller arrays with two elements each
  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  };

  // Filter out colleges with status other than "running"
  const runningColleges = collegeDetails.filter(college => college.status === 'running');

  // Chunk the filtered collegeDetails array into rows with two colleges each
  const collegeRows = chunkArray(runningColleges, 2);

 
  return (
    <div className="college-details-container">
      <h2 className='animate__animated animate__zoomInUp'>College Details</h2>
      {collegeRows.length === 0 && <p id='no-workshops'>No workshops found.</p>}
      {collegeRows.map((row, index) => (
        <div key={index} className="college-row">
          {row.map((college) => (
            <CollegeCard
              key={college._id}
              college={college}
              ratingAndReview={ratingsAndReviews[`${college.collegeName}_${college.courseOffered}`]}
              handleBooking={handleBooking}
              handleViewMore={handleViewMore} // Pass handleViewMore as a prop
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const CollegeCard = ({ college, ratingAndReview, handleBooking, handleViewMore }) => { // Add handleViewMore to the destructured props
  return (
    <div className="college-card">
      <div className="college-image">
        <img src="/college_img.jpg" alt={college.collegeName} />
      </div>
      {ratingAndReview && (
        <p style={{color:'orange',textAlign:'center',fontSize:'12px',marginBottom:'25px'}}>
          Average Rating: {(isNaN(ratingAndReview.averageRating) ? 0.0 : ratingAndReview.averageRating.toFixed(1))}
          <span style={{marginTop:'40px'}}><img src={Star} alt="star image" style={{width:'16px',height:'16px',marginTop:'20px'}} /></span> | 
          Reviews: {ratingAndReview.totalReviews}
        </p>
      )}
      <h2>{college.collegeName}</h2>
      <h3>Courses Offered: {college.courseOffered}</h3>
      <p>Address: {college.address}</p>
      <p>JNTUH Code: {college.jntuCode}</p>
      <div><p className='view-more' onClick={() => handleViewMore(college.collegeName, college.courseOffered)}>View more</p></div>
      <button className="workshop-btn" onClick={() => handleBooking(college.collegeName, college.courseOffered)}>Book Now</button>
    </div>
  );
};

export default CollegeDetails;
