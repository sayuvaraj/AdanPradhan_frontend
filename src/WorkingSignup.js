import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ClgSignup from './ClgSignup';
import Signup from './Signup';
import Header from './component/Header';
import './WorkingSignUpStyles.css'; // Import the CSS file
import Footer from './Footer';

function WorkingSignup(props) {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

    useEffect(() => {
        if (location.state && location.state.tabNumber) {
            setActiveTab(location.state.tabNumber);
        }
    }, [location.state]);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <Header />
            <div className="signup-work-container">
                <div className="signup-work-content">
                    <div className="signup-work-tab-buttons">
                        <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>Student</button>
                        <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>College</button>
                        {/* <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>Tab 3</button> */}
                    </div>
                    <div className="tab-content">
                        {activeTab === 1 && <Signup/>}
                        {activeTab === 2 && <ClgSignup />}
                        
                    </div>
                </div>
            </div>
            <section>
              <Footer/>
            </section>
        </>
    );
}

export default WorkingSignup;
