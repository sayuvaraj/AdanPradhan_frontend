import React from 'react'
import Lottie from 'lottie-react';
import Nodatacom from './NOdata.json';
const Nodata = () => {
  return (
    <div style={{display:'fex',justifyContent:'center'}}>     
    {/* // backgroundColor:'black' */}
      <Lottie animationData={Nodatacom} style={{width:'400px',height:'400px',textAlign:'center'}}/>
      <div style={{color:'#730f3c',fontSize:'50px',textAlign:'center',marginBottom:'20px'}}> "No Slots Booked Yet" !!</div>
    </div>
  )
}

export default Nodata
