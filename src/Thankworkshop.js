import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import ThankU from './ThankU.json';

const Thankworkshop= () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Navigate to the desired page after the animation completes
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the desired page (e.g., '/rateuspage') after 3 seconds
      navigate('/runningworkshops');
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigate]); // Add navigate to the dependency array to avoid linting warnings

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'70px'}}>
      <Lottie animationData={ThankU} loop={false} style={{ width: '500px', height: '400px' }} />
    </div>
    
    </>
  );
};

export default Thankworkshop;