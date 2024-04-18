import React from 'react'
import Lottie from 'lottie-react';
import Wearehercom from './WEarehere.json';
const WeareHere = () => {
  return (
    <div>
       <Lottie animationData={Wearehercom} style={{width:'100px',height:'100px',marginLeft:'-60px'}}/>
       
    </div>
  )
}

export default WeareHere
