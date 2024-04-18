import React from 'react'
import Lottie from 'lottie-react';
import reviewanim from './Reviewanim.json';
const ReviewAnim = () => {
  return (
    <div>
      <Lottie animationData={reviewanim}   style={{width:'200px',height:'200px'}}/>
    </div>
  )
}

export default ReviewAnim
