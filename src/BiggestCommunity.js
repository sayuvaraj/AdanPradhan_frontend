import React from 'react';
import Lottie from 'lottie-react';
import BiggestCommunitycom from './BiggestCommunity.json';
import Big from './Big.json';
const BiggestCommunity = () => {
  return (
  <>
    {/* <div style={{ width:'100%', height: '200px' ,backgroundColor:'white',display:'flex',marginRight:'50px',marginTop:'40px'}}>
       <div><Lottie animationData={BiggestCommunitycom} style={{ width: '103%', height: '100%',marginRight:'30px' }} /></div>
        <div style={{color:"purple",fontSize:"49px"}}>
            Courses
        </div>
    </div> */}
    <Lottie animationData={Big}  style={{height:'160px',width:'100%',backgroundColor:'white',marginTop:'40px'}}/>
  </>
  );
}

export default BiggestCommunity;
