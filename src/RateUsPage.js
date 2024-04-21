import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./RateUsPage.css";
import Footer from "./Footer";
import HeaderAfterLogin from "./component/HeaderAfterLogin";
import CongratsParticles from "./CongratsParticles"; // Import the CongratsParticles component
import Logo from "./images/collegelogowithtwo.png";
import FeedbackLogo from "./images/feedback3dman.png";
import thanku3dlogo from "./images/Thanku3d.png";
import Lottie from "lottie-react";
import SamplePic from "./SampleMessage.json";
import thankrateLogo from './images/Rateusimagethank.png';
const RateUsPage = () => {
    const navigate=useNavigate();
  const [rating, setRating] = useState(0); // State to store rating
  const [description, setDescription] = useState(""); // State to store description
  const [showMessage, setShowMessage] = useState(false); // State to manage message visibility
  const [caption, setCaption] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [animationPlaying, setAnimationPlaying] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
    switch (value) {
      case 1:
        setCaption("It is very bad 😠 ");
        break;
      case 2:
        setCaption("It can be better 😕 - Disappointed");
        break;
      case 3:
        setCaption("It has pros and cons 😐 - Neutral ");
        break;
      case 4:
        setCaption("It's good 😊 - Satisfied");
        break;
      case 5:
        setCaption("It's loving awesome 😍 - Very Satisfied");
        break;
      default:
        setCaption("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimationPlaying(true); // Start playing the animation
    setTimeout(() => {
      // Simulate delay before submitting the form
      setShowForm(false);
      setShowThankYou(true);
      // Optionally, you can send the form data to the server here
      console.log("Rating submitted:", rating);
      console.log("Review submitted:", description);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }, 3000);
  };

  const handleAnimationFinish = () => {
    setAnimationPlaying(false);
  };

  return (
    <>
      <section>
        <HeaderAfterLogin />
      </section>
      {showThankYou ? (
        <section>
          <div  className='animate__animated animate__zoomInUp' style={{ display: "flex", justifyContent: "center" }}>
            <img src={thanku3dlogo} width="150px" alt="image" />
          </div>
          <p style={{ color: "red", textAlign: "center", wordSpacing: "2px", fontSize: "12px" }}>
            Your Feedback Received successfully !!
          </p>
          <div   style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <img   className='animate__animated animate__heartBeat' src={thankrateLogo} width="450px" alt="thankrateimage" />
            <p style={{ fontSize: "30px", padding: "5px" }}> Thank you for sharing your valuable feedback with us! </p>
          </div>
          <p style={{color:'orangered',textAlign:'center'}}>"Keep discovering! Check out our array of exciting workshops."</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          
            <button className="explore-workshops-btn" onClick={() => navigate("/workshops")}>
              Explore More Workshops
            </button>
          </div>
        </section>
      ) : null}
      {showForm ? (
        <div className="rate-us-container-wrapper">
          <div className="rate-us-container">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <h1 className="rate-us-header">
              Rate Our <span style={{ color: "orange" }}>Services</span>
            </h1>
            <p style={{ color: "grey", textAlign: "center", padding: "10px" }}>
              "Your feedback is invaluable to us! It helps us understand what we're doing well and where we can improve.
              We truly appreciate every word you share with us.!!
            </p>
            <div>
              <img src={FeedbackLogo} alt="Feedback Logo" width="150px" />
            </div>
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
                        color: value <= rating ? "#fdd835" : "#ccc",
                      }}
                    >
                      ★
                    </span>
                  </label>
                ))}
              </div>
                


              {animationPlaying && (
        <Lottie
          animationData={SamplePic}
          loop={false}
          autoplay
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          onComplete={handleAnimationFinish}
        />
      )}
              <div className="rating-description">{caption}</div>
              <textarea
                className="review-textarea"
                placeholder="Write your review..."
                //   value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  marginTop: "30px",
                  justifyContent: "center",
                }}
              >
                <button type="submit" className="submit-btn-rate">
                  Submit Rating
                </button>
              </div>
            </form>
          </div>
          {/* Show thank you message */}
          {showMessage && <div className="thank-you-message">Thank you for rating!!</div>}
          <CongratsParticles style={{ position: "absolute", bottom: "0", left: "0" }} />{" "}
          {/* Render the CongratsParticles component with absolute positioning */}
        </div>
      ) : null}
      <section style={{ marginTop: "50px" }}>
        <Footer />
      </section>
      {/* {animationPlaying && (
        <Lottie
          animationData={SamplePic}
          loop={false}
          autoplay
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          onComplete={handleAnimationFinish}
        />
      )} */}
    </>
  );
};

export default RateUsPage;
