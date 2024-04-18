import React, { useState, useEffect } from 'react';
import Contact from './Contact';
import ClgHeader from './component/ClgHeader';
import LoadingAnimation from './LoadingAnimation'; // Import the LoadingAnimation component

const ContactCollege = () => {
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
    <div>
      <section>
        <ClgHeader />
      </section>
      {loading ? (
        // Render LoadingAnimation component while loading is true
        <LoadingAnimation />
      ) : (
        // Render Contact component when loading is false
        <section>
          <Contact />
        </section>
      )}
    </div>
  );
};

export default ContactCollege;

