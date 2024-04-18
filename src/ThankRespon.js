import React from 'react'
import Lottie from 'lottie-react';
import thankres from './thnku.json';
const ThankRespon = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Lottie animationData={thankres} style={{width:'320px', height:'200px'} } loop={false} />
    </div>
  )
}

export default ThankRespon
