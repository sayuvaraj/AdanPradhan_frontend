import React from 'react'

// import home_imge from './home_imge.jpg';
// import LetsGetStarted from './images/LetsGetStarted.jpg';
import home_imge from './images/home_imge.jpg';
import question_mark from './question_mark.webp';
import Faqs from './Faqs';
import Footer from './Footer';
import './Home_style.css';
const Home=() =>{
    return (
   <>
   
   <section>
   <div class="welcome-section">
  {/* <h1>Welcome, Explorer !</h1> */}
  <h1 className='home-text-anim'>Welcome, <span style={{ color: 'orange' }}>Explorer </span>!</h1>

 
  <div class="caption">
    {/* <h2>Unlock Your Potential</h2> */}
    <h2 className='home-text-anim'>AdanPradhan </h2>
  <p >Experience education in action.Enroll now and dive into practical training !</p>
  
  </div>
</div>

   </section>
   <section>
     <div className='container'>
        <div className='row'>
          <div className='col'>
            <div class="columnsize1">
   {/* <img src="C:\Users\S A YUVARAJ\Documents\web_practise\web_project\public\home_imge.jpg"  alt=" image not found" 
   width="640rem" height="360rem"/> */}
                    <img src={home_imge} alt="not found" width="780px" height="480px" />
            </div>
          </div>
          

        </div>
     </div>
   </section>

   <div className="containerwhyadan">
  <div className="whyadan1">
    <img src={question_mark} alt="not found" width="400px" height="400px" />
  </div>
  
    {/* <h2>WHY AADAN PRADAN.?</h2> */}
    <p id='description'>
      <h2 style={{color:'White'}}>Why Adan Pradhan ???</h2>
     
      we pride ourselves on our commitment to excellence and innovation. Our team is dedicated to delivering exceptional results tailored to meet your unique needs.At AdanPradhan, With a dedication to excellence and a passion for innovation, we stand out as leaders in our field. Our commitment to personalized service, expertise, and attention to detail ensures that your project is in capable hands.<span style={{fontStyle:'italic'}}> "Experience the difference with AdanPradhan today"</span>
     </p>
  
  </div>
      
    <div style={{marginLeft:'15px',padding:'30px'}}>
       <strong><p style={{fontSize:'30px',marginLeft:'15px',color:'orangle'}}>Quick Read </p></strong>
      <hr style={{ width: '90%', borderTop: '2px solid #163046', margin: '10px 0' }} />
      <p id='para'style={{textSize:'40px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugiat, minus culpa architecto, dignissimos iste voluptatum unde asperiores dolorum voluptatibus quisquam reiciendis consectetur quaerat reprehenderit veniam. Harum nobis voluptatum eum sed nulla? Aut rerum ad ratione fugit iure mollitia dicta sapiente exercitationem sed ex animi, explicabo nobis saepe dolores similique voluptatem est! Enim, accusantium quibusdam odio ut odit ullam distinctio!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo sequi tenetur praesentium perferendis eos in minima eveniet ab sunt. Et repellat reprehenderit totam odio, 
      </p> 
   </div>
   <Faqs/>
   <Footer/>
   </>
  )
}

export default Home;
