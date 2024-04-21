import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import CountDown from './CountDown.json';

const CollegeStartUp = () => {
    const navigate = useNavigate();
    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);

    // useEffect hook to navigate to workshops page when animation completes
    useEffect(() => {
        if (isAnimationCompleted) {
            navigate('/aboutclg');
        }
    }, [isAnimationCompleted, navigate]);

    // Callback function to be called after animation completes
    const onAnimationComplete = () => {
        setIsAnimationCompleted(true); // Set the state to indicate animation completion
    };

    return (
      
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'70px'}}>
        <Lottie animationData={CountDown} loop={false} style={{ width: '500px', height: '400px' }}  onComplete={onAnimationComplete}  />
      </div>
      
    );
};

export default CollegeStartUp;
