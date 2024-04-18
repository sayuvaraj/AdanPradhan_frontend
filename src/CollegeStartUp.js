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
            navigate('/runningworkshops');
        }
    }, [isAnimationCompleted, navigate]);

    // Callback function to be called after animation completes
    const onAnimationComplete = () => {
        setIsAnimationCompleted(true); // Set the state to indicate animation completion
    };

    return (
        <div>
            <Lottie style={{width:'auto' ,height:'800px'}}
                animationData={CountDown}
                loop={false}
                onComplete={onAnimationComplete} // Call onAnimationComplete after animation completes
            />
        </div>
    );
};

export default CollegeStartUp;
