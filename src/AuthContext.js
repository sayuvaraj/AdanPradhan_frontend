// AuthContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the Auth context
const AuthContext = createContext();

// Create the Auth provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isclgAuthenticated,setIsclgAuthenticated]=useState(false);
  const [clg_token,setclg_token]=useState(null);
  const [token, setToken] = useState(null);
 // const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const clg_storedToken=localStorage.getItem("clg_token");
   // const storedUser = JSON.parse(localStorage.getItem("user"));
    if(clg_storedToken){
      setIsclgAuthenticated(true);
      setclg_token(clg_storedToken);
    }
    if (storedToken ) {
      // Set the user as authenticated and set the token and user data
      setIsAuthenticated(true);
    //  setUser(storedUser);
      setToken(storedToken);
    }
  }, []);



  const login = ( authToken) => {
    setIsAuthenticated(true);
    //setUser(userData);
    setToken(authToken);
    //setIsclgAuthenticated(true);
    //setclg_token(clg_token);
   // console.log(JSON.stringify(userData))

    // Store the token and user data in local storage
    localStorage.setItem("token", authToken);
  //  localStorage.setItem("clg_token",clg_token);

    //localStorage.setItem("user", JSON.stringify(userData));
  };
  const clgLogin=(clgauthToken)=>{
    setIsclgAuthenticated(true);
    setclg_token(clgauthToken);
    localStorage.setItem("clg_token",clgauthToken);
  }
  const clgLogout=()=>{
    setIsclgAuthenticated(false);
    localStorage.removeItem("clg_token");
    setclg_token(null);
  }

  // Function to set the authentication status to false (for logout)
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
   // setIsclgAuthenticated(false);
   // localStorage.removeItem("clg_token");
  
   //setclg_token(null);
    //localStorage.removeItem("user");
    //localStorage.removeItem("Id");
   // setUser(null);
    setToken(null);
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated,login,logout,token,setIsAuthenticated,isclgAuthenticated,setIsclgAuthenticated,clg_token,clgLogin,clgLogout }}>
      {children}
    </AuthContext.Provider>
  );
//   return (
//     <AuthContext.Provider
//       value={{ user, authenticated, token, login, logout, setAuthStatus }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );

};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);
