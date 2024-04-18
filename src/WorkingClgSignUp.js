// import React, { useState } from 'react';
// // import Login from './Login';
// import ClgSignup from './ClgSignup';
// import Login from './Login';
// import Header from './component/Header';
// function WorkingClgSignUp(props) {
//   const [activeTab, setActiveTab] = useState(2); // Default active tab is 1

//   const handleTabClick = (tabNumber) => {
//     setActiveTab(tabNumber);
//   };

//   return (
//     <>
//     <Header/>
//     <div>
//       <div className="tab-buttons">
//         <button onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''}>Student</button>
//         <button onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''}>College</button>
//         <button onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''}>Tab 3</button>
//       </div>
//       <div className="tab-content">
//         {activeTab === 1 && <Login/>}
//         {activeTab === 2 && <ClgSignup/>}
//         {activeTab === 3 && <div>Content for Tab 3</div>}
//       </div>
//     </div>
//     </>
//   );
// }

// export default WorkingClgSignUp;
