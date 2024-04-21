import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import LoadingAnimation from "./LoadingAnimation"; // Import the LoadingAnimation component
import Footer from "./Footer";
import "./College_demo_style.css"; // Import your CSS file for styling
import ClgHeader from "./component/ClgHeader";
import { useAuth } from "./AuthContext";
import ThreeColors from "./ThreeColors";

const Form = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const { clg_token } = useAuth();
  const [collegeName, setCollegeName] = useState("");
  const [courseOffered, setCourseOffered] = useState("");
  const [numSeats, setNumSeats] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [address, setAddress] = useState("");
  const [jntuCode, setJntuCode] = useState("");
  const [loading, setLoading] = useState(true); // State to track loading status

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await fetch("https://adan-pradhan-backend.vercel.app/api/clg/College_data", {
        // const response = await fetch("https://adan-pradhan-backend.vercel.app/api/clg/College_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          clg_token: `${localStorage.getItem("clg_token")}`,
        },
        body: JSON.stringify({
          collegeName,
          courseOffered,
          numSeats,
          totalSeats,
          address,
          jntuCode,
        }),
      });
      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form fields if submission is successful
        setCollegeName("");
        setCourseOffered("");
        setNumSeats("");
        setTotalSeats("");
        setAddress("");
        setJntuCode("");
        
        // Redirect to ThankWorkshop.js using navigate
        navigate('/thankworkshop');
      } else {
        console.error("Form submission failed:", await response.text());
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  useEffect(() => {
    const fetchCollegeDetails = async () => {
      try {
         const response = await fetch("https://adan-pradhan-backend.vercel.app/api/clg/clgName", {
         // const response = await fetch("https://adan-pradhan-backend.vercel.app/api/clg/clgName", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            clg_token: clg_token, // Pass college token in the request headers
          },
        });
        if (response.ok) {
          const collegeData = await response.json();
          console.log(collegeData);
          setCollegeName(collegeData);
          console.log(collegeData.clgname);
        } else {
          console.error("Failed to fetch college details");
        }
      } catch (error) {
        console.error("Error fetching college details:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching college details
      }
    };

    fetchCollegeDetails();
  }, [clg_token]);

  if (loading) {
    return <LoadingAnimation />; // Render loading animation while loading is true
  }

  return (
    <>
      <section className="clg-header">
        <ClgHeader />
      </section>
      {/* <ThreeColors/> */}
      <div style={{width:'auto',height:'200px'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,85.3C672,96,768,160,864,160C960,160,1056,96,1152,101.3C1248,107,1344,181,1392,218.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
     
      </div>
      <div className="workshop-inspiration-section">
        <h2 className="college-demo-inspire-section">
          <span style={{ color: "orange", fontSize: "40px" }}> Discover ,</span>
          <span style={{ color: "purple", fontSize: "40px" }}>Create ,</span>
          <span style={{ color: "green", fontSize: "40px" }}> Innovate</span>
        </h2>
        <p className="college-demo-inspire-para">
          {" "}
          "Ignite Learning Through Workshops: Empowering Minds and Cultivating
          Growth on Campus"
        </p>
        {/* Add more captions or inspirational text here */}
      </div>
      <div className="form-container college-demo">
        <form onSubmit={handleFormSubmit} className="form">
          <h2>College Information Form</h2>
          <div className="college-demo-form-group">
            <label htmlFor="collegeName">College Name:</label>
            <input
              type="text"
              id="collegeName"
              value={collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
              readOnly
              required
              className="college-demo-input"
            />
          </div>
          <div className="college-demo-form-group">
            <label htmlFor="courseOffered">Course Offered:</label>
            <input
              type="text"
              id="courseOffered"
              value={courseOffered}
              onChange={(e) => setCourseOffered(e.target.value)}
              required
              className="college-demo-input"
            />
          </div>
          <div className="college-demo-form-group">
            <label htmlFor="numSeats">Number of Seats:</label>
            <input
              type="number"
              id="numSeats"
              value={numSeats}
              onChange={(e) => setNumSeats(e.target.value)}
              required
              className="college-demo-input"
            />
          </div>
          <div className="college-demo-form-group">
            <label htmlFor="totalSeats">Total Number of Seats:</label>
            <input
              type="number"
              id="totalSeats"
              value={totalSeats}
              onChange={(e) => setTotalSeats(e.target.value)}
              required
              className="college-demo-input"
            />
          </div>
          <div className="college-demo-form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="college-demo-textarea"
            />
          </div>
          <div className="college-demo-form-group">
            <label htmlFor="jntuCode">JNTU Code:</label>
            <input
              type="text"
              id="jntuCode"
              value={jntuCode}
              onChange={(e) => setJntuCode(e.target.value)}
              required
              className="college-demo-input"
            />
          </div>
          <button type="submit" className="collegedemobtn">
            Submit
          </button>
          
        </form>
        
      </div>
      <Footer />
    </>
  );
};

export default Form;
