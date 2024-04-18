import React, { useState } from 'react';
import './Faqs_style.css';


function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAccordion}>
        {question}
        {isOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function Faqs() {
  return (
    <>
    <div className="Faqs">
      {/* <h1>Adan Pradhan Workshop FAQs</h1> */}
      <h1 style={{ color: '#163046' }}>Adan Pradhan Workshop FAQs</h1>
      <div className="faq-list">
        <FAQItem
          question="What workshops does Adan Pradhan offer?"
          answer="Adan Pradhan offers a wide range of workshops for students to book. These workshops cover various topics such as coding, robotics, AI, entrepreneurship, and more."
        />
        <FAQItem
          question="How can students book workshops on Adan Pradhan's website?"
          answer="To book workshops, students can simply browse through the available workshops on our website and select the ones they are interested in. Then, they can follow the booking process to secure their spot."
        />
        <FAQItem
          question="Are there any lab sessions included in the workshops?"
          answer="Yes, many of our workshops include hands-on lab sessions where students can apply the concepts they learn in a practical setting. These sessions are designed to enhance the learning experience and provide valuable practical knowledge."
        />
        <FAQItem
          question="Can colleges arrange workshops for their students through Adan Pradhan?"
          answer="Absolutely! Adan Pradhan offers workshops tailored specifically for colleges and universities. Institutions can collaborate with us to organize workshops that meet the needs and interests of their students."
        />
        <FAQItem
          question="Are there any discounts available for bulk workshop bookings?"
          answer="Yes, we offer discounts for bulk workshop bookings. Colleges, universities, and other organizations interested in booking multiple workshops can contact us for more information on discounted rates."
        />
        <FAQItem
          question="Can colleges arrange workshops for their students through Adan Pradhan?"
          answer="Absolutely! Adan Pradhan offers workshops tailored specifically for colleges and universities. Institutions can collaborate with us to organize workshops that meet the needs and interests of their students."
        />
        <FAQItem
          question="Are there any discounts available for bulk workshop bookings?"
          answer="Yes, we offer discounts for bulk workshop bookings. Colleges, universities, and other organizations interested in booking multiple workshops can contact us for more information on discounted rates."
        />
      </div>
    </div>
   
    </>
  );
}

export default Faqs;
