import React, { useState,useEffect } from 'react';
import './CoursePage.css'; // Import CSS file for styling
import CourseImage from './images/tickmark.jpg';
import HeaderAfterLogin from './component/HeaderAfterLogin';
import { useLocation } from 'react-router-dom';
const CoursePage = () => {
  // const location=useLocation();
  //  const { collegeName, courseOffered } = location.state;
  const [displayAbout, setDisplayAbout] = useState(true);
  const location = useLocation();
  const [reviewspage, setReviewspage] = useState([]);
  const { collegeName, courseOffered } = location.state;
  const toggleAbout = () => {
    setDisplayAbout(true);
  };

  const toggleReviews = () => {
    setDisplayAbout(false);
  };

  // const reviews = [
  //   { id: 1, name: "John Doe", rating: 5.0, date: "April 14, 2024", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta sapien eu felis viverra hendrerit." },
  //   { id: 2, name: "Jane Smith", rating: 4.5, date: "April 15, 2024", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  //   { id: 1, name: "John Doe", rating: 5.0, date: "April 14, 2024", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta sapien eu felis viverra hendrerit." },
  //   { id: 2, name: "Jane Smith", rating: 4.5, date: "April 15, 2024", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
  //   // Add more reviews here if needed
  // ];
  const fetchReviews = async (collegeName, courseOffered) => {
    try {
      const url = `https://adan-pradhan-backend.vercel.app/api/course-reviews?collegeName=${encodeURIComponent(collegeName)}&courseOffered=${encodeURIComponent(courseOffered)}`;
      const response = await fetch(url);
      if (response.ok) {
        const reviewsData = await response.json();
        console.log(reviewsData);
        setReviewspage(reviewsData);
        console.log("completed");
      } else {
        console.error('Error fetching reviews:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews(collegeName, courseOffered);
  }, []); // Empty dependency array to run only once when component mounts
  const totalRating = reviewspage.reduce((total, review) => total + review.rating, 0);
const averageRating = totalRating / reviewspage.length;


  return (
    <>
    <section>
        <HeaderAfterLogin/>
    </section>
    <div className="course-page">
      <header id='coursepage-header'>
        <h1 className='course-heading'>{courseOffered}</h1>
        <div className="rating">
          {/* <span>5.0 </span>
          <span role="img" aria-label="star">⭐</span> */}
        </div>
        <p style={{color:'black'}}> <span style={{color:'black'}}>{averageRating}</span>
          <span style={{color:'black'}} role="img" aria-label="star">⭐ | </span>Review ({reviewspage.length}) | 10k students</p>
      </header>

      <div className="content-container">
        <div className="video">
          <h2>Course Overview</h2>
          <iframe width="680" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Course Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="what-you-learn" style={{marginTop:'80px'}}>
        <h3 style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px',fontSize:'30px' }}>What You'll Learn</h3>
          <ul>
     <li style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px' }}> <span > <img  style={{marginTop:'22px'}} src={CourseImage} alt="Course" width={'40px'} /></span>  Frontend Development</li>
            <li style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px' }}> <span > <img  style={{marginTop:'22px'}} src={CourseImage} alt="Course" width={'40px'} /></span>  Backend Development</li>
            <li style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px' }}><span > <img  style={{marginTop:'22px'}} src={CourseImage} alt="Course" width={'40px'} /></span>  Database Management</li>
            {/* Add more items */}
            <li style={{ textAlign: 'center', margin: '0 auto', maxWidth: '300px' }}> <span > <img  style={{marginTop:'22px'}} src={CourseImage} alt="Course" width={'40px'} /></span>  Deployment Management</li>
           
          </ul>
        </div>
      </div>

      <div className="about-reviews">
        <div className="section-buttons">
          <button onClick={toggleAbout} className={displayAbout ? 'active' : ''}>About</button>
          <button onClick={toggleReviews} className={!displayAbout ? 'active' : ''}>Reviews</button>
        </div>

        {displayAbout ? (
          <section className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta sapien eu felis viverra hendrerit. Quisque hendrerit, nulla nec pulvinar accumsan, felis purus hendrerit ligula, sit amet gravida eros metus sit amet urna.</p>
          </section>
        ) : (
          <section className="reviews">
            <h2>Reviews</h2>
            {reviewspage.length ===0 ?(
              <p style={{color:'red',textAlign:'center',marginTop:'20px'}}>No reviews found !!</p>
            ):(
            reviewspage.map(reviewspage => (
              <div key={reviewspage.id} className="review1">
                <div className="review-header1">
                 <div>
                 <span className="person-symbol" style={{color:"black"}}>👤</span>
                  <span className="reviewer-name" style={{color:"Green" ,fontSize:"18px"}} >{reviewspage.name}  </span>
                 
                 </div>

                 </div>
                  {/* <span>{review.rating}</span>
                      <span role="img" aria-label="star">⭐ |</span>
                      <span className="review-date"> {review.date} .</span> */}
                 <div>
                    {/* <h3 className="reviewer-name">{review.name}</h3> */}
                    <div className="rating1" style={{marginTop:'3px'}}>
                      <span style={{marginRight:'6px'}}> </span>
                      <span style={{marginRight:'1px',marginLeft:'4px',fontSize:'12px'}}> {reviewspage.rating}</span>
                      <span role="img" aria-label="star" style={{marginLeft:'3px'}}>⭐ | </span>
                      <span style={{fontSize:'12px'}} className="review-date">{new Date(reviewspage.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                
                 <p style={{textAlign:'center'}} className="review-text">{reviewspage.review}</p> 
              </div>
            )))}
          </section>
        )}
      </div>
    </div>

    {/* fetchReviews(collegeName, courseOffered); */}
    </>
  );
}

export default CoursePage;
// fetchReviews(collegeName, courseOffered);