import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // When the component mounts, call the logout function from the AuthContext
    logout();

    // Navigate to the home route after logging out
    navigate('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // This effect runs only once when the component mounts

  // You can optionally add a message or redirect the user after logging out
//   return (
//     // <div>
//     //   <h2>Logging out...</h2>
//     //   {/* Add any additional content or redirect logic here */}
//     // </div>
//   );
};

export default Logout;
