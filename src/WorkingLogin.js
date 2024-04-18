import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Login from './Login';
import ClgSignin from './ClgSignin';
import Header from './component/Header';
import './WorkingLogin.css'; // Import CSS file for styling
import Footer from './Footer';





function WorkingLogin() {
    const location = useLocation(); // Access location state
    const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

    useEffect(() => {
        // Check if tabIndex is set in location state
        if (location.state && location.state.tabNumber) {
            setActiveTab(location.state.tabNumber);
        }
    }, [location.state]); // Re-run effect when location state changes

    const handleTabClick = (tabNumber1) => {
        setActiveTab(tabNumber1);
    };

    return (
        <>
            <Header />
             
            
            <div className="tab-container">
                <div className="tab-buttons">
                    <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>Student</button>
                    <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>College</button>
                    <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>Admin</button>
                </div>
                <div className="tab-content">
                    {activeTab === 1 && <Login />}
                    {activeTab === 2 && <ClgSignin />}
                    {activeTab === 3 && <div>We are working on that</div>}
                </div>
            </div>
            <section>
              <Footer/>
            </section>
           
        </>
    );
}

export default WorkingLogin;
