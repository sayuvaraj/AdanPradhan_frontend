import React, { useState, useEffect } from 'react';
import Faqs from './Faqs';
import HeaderAfterLogin from './component/HeaderAfterLogin';
import Footer from './Footer';
import FaqsAnim from './FaqsAnim';
import LoadingAnimation from './LoadingAnimation';
import Faqimage from './images/faqsimage.jpg';
import faqimage2 from './images/questionmark2.jpg';
const FaqsMain = () => {
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain delay
    }, 2000); // Adjust the delay as needed

    // Cleanup function to clear timeout when component unmounts or loading state changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderAfterLogin />
      {loading ? (
        // Render loading animation while loading is true
       <LoadingAnimation/>
      ) : (
        // Render Faqs component when loading is false
        <>
        {/* <div> <FaqsAnim/></div> */}
        <div style={{marginTop:'20px',display:'flex' ,justifyContent:'center'}}>
          {/* <img src={Faqimage} alt='Faqs' style={{width:'550px',height:'450px'}} /> */}
          <span style={{color:'red',fontSize:'4vw',marginTop:'222px'}}>F A Qs </span>
          <div><img src={faqimage2} alt='Faqs' style={{ width: '80%',maxWidth: '550px',height:'400px'}} /></div>
        </div>
        


          <div><Faqs/></div>
           </>
      )}
     {!loading && ( <section style={{ marginTop: '50px' }}>
        <Footer />
      </section>)}
    </>
  );
};

export default FaqsMain;
