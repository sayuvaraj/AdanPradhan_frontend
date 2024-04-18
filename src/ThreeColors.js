import React from 'react'
import Lottie  from 'lottie-react';
import Threecolor from './threecolors.json';
const ThreeColors = () => {
  return (
    <div>
      <Lottie animationData={Threecolor} style={{width:'60%',height:"8%"}} />
    </div>
  )
}

export default ThreeColors
