import React from 'react'
import Lottie from 'lottie-react';
import Faqscom from './Faqsanim.json';
const FaqsAnim = () => {
  return (
    <div>
      <Lottie animationData={Faqscom} style={{width:'200px',height:'200px'}} />
    </div>
  )
}

export default FaqsAnim
