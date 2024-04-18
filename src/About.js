

import React from 'react';
import './About.css'; // Import CSS file for styling
import Footer from './Footer';

const AboutUs = () => {
    return (
      <>
     
        <div className="about-us-container">
            <div className="about-us-intro">
                <h1 className='Our-vision text-anim'>Our Vision and Mission</h1>
                <p className='about-intro1 text-anim'>At Adanpradhan, we believe in empowering students with practical knowledge and innovative workshops to unlock their full potential. Our mission is to provide a platform where students can gain a deeper understanding of complex topics in a simple and practical manner. We strive to make learning an engaging and enriching experience for every individual.</p>
                <h2 className='text-anim'>Our Stories</h2> 
                 <p className='about-intro'>Adanpradhan began with a simple yet powerful idea: to revolutionize the way students learn and understand concepts. Founded by a team of passionate educators, our journey started with the vision to bridge the gap between theoretical knowledge and real-world application. Over the years, we have evolved into a trusted resource for students seeking practical insights and hands-on learning experiences.</p>
               {/* <div className="ratings">
                    <p>Rated 4.9 stars by our students</p>
                    <p>Read some of our reviews:</p>
                    <ul>
                        <li>"Adanpradhan has been instrumental in helping me understand complex topics in a simple and practical manner. Highly recommended!"</li>
                        <li>"The workshops provided by Adanpradhan have truly enhanced my learning experience. Great platform!"</li>
                    </ul>
                </div> */}
            </div>
            <div className="student-images">
                {/* Insert college student images here */}
                <img src="https://media.gettyimages.com/id/1436453679/photo/graduation-cap-certificate-and-black-man-or-students-on-campus-outdoor-for-university-success.jpg?s=612x612&w=0&k=20&c=0V7Dz-CoMI1JxJZT-ib6C7CmEVM1kN2I8fsaW_WuX8g=" alt="Student 1" />
                <img src="https://media.gettyimages.com/id/1436453664/photo/diversity-education-and-graduation-happy-students-at-university-ceremony-in-garden-with.jpg?s=612x612&w=0&k=20&c=cDb0RShB1neVBfPm2lLcfJaQ0mSrurdtpyI1Cftq-4s=" alt="Student 2" />
                {/* Add more images as needed */}
            </div>
            <h2 style={{color:'orangered'}}>Our Services</h2>
            <div className="videos">
                {/* Embed YouTube videos */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/uLp0NhNszQU?si=RAmvVLfS-gHuzQ3S" title="Video 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay muted></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8vyboVwyzfU?si=sxg_PIF-7BoYx1wp" title="Video 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen autoplay muted></iframe>

                 </div>
            <h2 className='partner-heading'>Our Partners</h2>
            <div className="partners">
                {/* Insert partner logos */}
               
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CFA0oIO9tpahaU7MziuRc64W1E_ODYrAjODXr9rdH1UVxibkmoF5_JKJLZYVxI-92wY&usqp=CAU" alt="Partner 1" className="partner-logo" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKqHOOJqX9bu1sA0oM6RZi3LbaCwv69PDByncPuop5xhpcS6Vx5GVdSM3zZMHJS55aos&usqp=CAU" alt="Partner 2" className="partner-logo" />
                <img src="https://img.freepik.com/premium-vector/logo-university-name-logo-company-called-university_516670-732.jpg?size=626&ext=jpg&ga=GA1.1.2040923074.1711649224&semt=aishttps://i.ytimg.com/vi/SEmpCPFQIno/maxresdefault.jpg" alt="Partner 1" className="partner-logo" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt9YvhKHwQbneJVAs133oaDhsEXMpZ1eR1NUNhrmVFK4Ff3UDjISvmrR3s68GRtZQhkvg&usqp=CAUttps://i.pinimg.com/564x/ca/ec/35/caec35c2f1dd4264c5510341ea55165a.jpg" alt="Partner 2" className="partner-logo" />
                {/* <img src="https://www.careerindia.com/college-logo/128x128/9/Keshav-Memorial-Institute-of-Technology-KMIT-Hyderabad.jpg" alt="Partner 2" className="partner-logo" /> */}
                
               
                {/* Add more partner logos as needed */}
            </div>
            <div className="reviews">
                <h2 className='review-heading text-animation'>What Our Students say </h2>
                <p className='reviews-para'>

             Discover inspiration and insights through recent reviews from our students. Their success stories reflect the transformative journey of learning and growth with CodeHelp.</p>
                <div className="review">
                    <div className="review-content">
                        <img src="https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg" alt="Student 1" className="student-image" />
                        <div className="review-text">
                        <strong>   <p>"Adanpradhan has been instrumental in helping me understand complex topics in a simple and practical manner. Highly recommended!" Adanpradhan has been an invaluable resource in my academic journey. As a student grappling with complex concepts, I found the platform's innovative workshops to be incredibly beneficial. The hands-on approach to learning allowed me to gain practical knowledge and a deeper understanding of the subjects I was studying.</p>
                        </strong><p className="review-author">- John Doe</p>
                        </div>
                    </div>
                </div>
               
                <div className="review">
                    <div className="review-content">
                        <img src="https://img.freepik.com/free-photo/front-view-female-student-black-jacket-wearing-backpack-holding-files-with-copybooks-thinking-blue-wall-college-university-lessons_140725-43340.jpg" alt="Student 1" className="student-image" />
                        <div className="review-text">
                          <strong>  <p>"Adanpradhan has been instrumental in helping me understand complex topics in a simple and practical manner. Highly recommended!" Adanpradhan has been an invaluable resource in my academic journey. As a student grappling with complex concepts, I found the platform's innovative workshops to be incredibly beneficial. The hands-on approach to learning allowed me to gain practical knowledge and a deeper understanding of the subjects I was studying.</p>
                            <p className="review-author">- John Doe</p></strong>
                        </div>
                    </div>
                </div>
                <div className="review">
                    <div className="review-content">
                        <img src="https://img.freepik.com/free-photo/front-view-female-student-black-jacket-wearing-backpack-holding-files-with-copybooks-thinking-blue-wall-college-university-lessons_140725-43340.jpg" alt="Student 1" className="student-image" />
                        <div className="review-text">
                          <strong>  <p>"Adanpradhan has been instrumental in helping me understand complex topics in a simple and practical manner. Highly recommended!" Adanpradhan has been an invaluable resource in my academic journey. As a student grappling with complex concepts, I found the platform's innovative workshops to be incredibly beneficial. The hands-on approach to learning allowed me to gain practical knowledge and a deeper understanding of the subjects I was studying.</p>
                          </strong>
                            <p className="review-author">- John Doe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="large-button-container">
                    <button className="large-button">45000+ Happy Learners</button>
                </div>
        <section>
            <Footer/>
        </section>
        </>
    );
}

export default AboutUs;

