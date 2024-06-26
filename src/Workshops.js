import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Workshop_style.css'; // Import your CSS file for styling
import HeaderAfterLogin from './component/HeaderAfterLogin';
import Footer from './Footer';
import LoadingAnimation from './LoadingAnimation';
import BiggestCommunity from './BiggestCommunity';
import Star from './images/Starimage.png';
import AddressLogo from './images/AddressLogo.png';
import EmailLogo from './images/emaillogo.png';
import workshop2 from './images/workshop2.jpg';
import workshop3 from './images/workshop3.jpg';
import workshop4 from './images/workshop4.jpg';
import workshop5 from './images/workshop5.jpg';
import workshop6 from './images/workshop6.jpg';
import workshop8 from './images/workshop8.jpg';
import workshop9 from './images/workshop9.jpg'; 
import workshop10 from './images/workshop10.jpg';
import workshop11 from './images/workshop11.jpg';
import workshop12 from './images/workshop12.jpg';
import workshop13 from './images/workshop13.jpg';
import workshop14 from './images/workshop14.jpg';

const CollegeDetails = () => {
  const navigate = useNavigate();
  const [collegeDetails, setCollegeDetails] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [ratingsAndReviews, setRatingsAndReviews] = useState({});

  const handleViewMore = (collegeName, courseOffered) => {
    navigate('/course-page', { state: { collegeName, courseOffered } });
  };

  // Function to generate a random image name
  const getRandomImage = (index) => {
    const images = [workshop3, workshop4,workshop6, workshop2, workshop14,
      workshop13, workshop5, workshop6, workshop8, workshop9, workshop10, workshop11,
      workshop12,
    ]; // Add your image filenames here
    const imageIndex = index % images.length; // Calculate the index based on the current index and array length
    return images[imageIndex];
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
              getRandomImage={getRandomImage} // Pass getRandomImage as a prop
            />
          </>
        )}
        {!loading && <Footer />}
      </div>
    </>
  );
};

const CollegeDetailsContainer = ({ collegeDetails, ratingsAndReviews, handleBooking, handleViewMore, getRandomImage }) => {
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
  const collegeRows = chunkArray(runningColleges, 3);

  return (
    <div className="college-details-container">
      <h2 className='animate__animated animate__zoomInUp' style={{color:'orangered',textAlign:'center',FontSize:'40px',}}>All Workshops</h2>
      {collegeRows.length === 0 && <p id='no-workshops'>No workshops found.</p>}
      {collegeRows.map((row, rowIndex) => (
        <div key={rowIndex} className="college-row">
          {row.map((college, colIndex) => (
            <CollegeCard
              key={colIndex}
              college={college}
              ratingAndReview={ratingsAndReviews[`${college.collegeName}_${college.courseOffered}`]}
              handleBooking={handleBooking}
              handleViewMore={handleViewMore} // Pass handleViewMore as a prop
              getRandomImage={getRandomImage} // Pass getRandomImage as a prop
               index={rowIndex * 3 + colIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const CollegeCard = ({ college, ratingAndReview, handleBooking, handleViewMore, getRandomImage ,index}) => {
  
 
  return (
    <div className="college-card">
      <div className="college-image">
        
        <img src={`${getRandomImage(index)}`} alt={college.collegeName} />
       
      </div>
      <div>
        {ratingAndReview && (
          <>
            <div style={{ marginBottom: '7px', display: 'flex', justifyContent: 'center' }}>
              <h3 style={{ marginLeft: '20px', textAlign: 'center' }}>{college.courseOffered} </h3>
            </div>
            <p style={{ color: 'orange', fontSize: '14px', marginBottom: '5px', textAlign: 'center' }}>
              Rating: {isNaN(ratingAndReview.averageRating) ? 0.0 : ratingAndReview.averageRating.toFixed(1)}{' '}
              <img src={Star} alt="star image" style={{ width: '16px', height: '16px' }} />{' '}
              <span style={{ color: 'black' }}> || </span> Reviews: {ratingAndReview.totalReviews}
            </p>
            <div style={{ display: 'flex' }}>
              <div>
                <img style={{ marginTop: '5px' }} width='80px' src={AddressLogo} alt='Address Logo' />
              </div>
              <div>
                <p style={{ marginBottom: '20px' }}><span style={{color:"orangered"}}>{college.collegeName}</span> college, {college.address}</p>
              </div>
            </div>
            <div style={{ display: 'flex', marginLeft: '14px' }}>
              <div>
                <img src={EmailLogo} width="48px" alt='Email Logo' />
              </div>
              <div>
                <p style={{ marginBottom: '20px', marginLeft: '16px' }}>{college.collegeName}@gmail.com</p>
              </div>
            </div>
          </>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <p style={{ fontSize: '14px', marginLeft: '25px' }} className='view-more' onClick={() => handleViewMore(college.collegeName, college.courseOffered)}>View Details</p>
          <p><button className="workshop-btn-booknow" onClick={() => handleBooking(college.collegeName, college.courseOffered)}>Book Now</button></p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
