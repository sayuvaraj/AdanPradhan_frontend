import React from 'react'
import Lottie from 'lottie-react';
import Deletedcomp from './Deleted.json';
const Deleted = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
      <Lottie animationData={Deletedcomp} loop={false} style={{width:'auto',height:'100px'}}/>
     
    </div>
     
     </>
  )
}

export default Deleted
