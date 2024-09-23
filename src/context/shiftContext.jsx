// import React, { createContext, useState, useEffect, useContext } from 'react';

// // Create AuthContext
// const ShiftContext = createContext();

// export const ShiftProvider = ({ children }) => {
//   const [shift, setShift] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Load user from localStorage on mount
//   useEffect(() => {
//     const savedUserData = localStorage.getItem('user');
//     if (savedUserData) {
//       setUser(JSON.parse(savedUserData));  // Parse stored user data
//     }
//     setLoading(false);  // Set loading to false once data is read
//   }, []);

//   // Simulate login (Set user data in state and localStorage)
//   const login = (newUserData) => {
//     // setUser(newUserData);
//     localStorage.setItem('user', JSON.stringify(newUserData));  // Save the user data in localStorage
//   };

//   // Logout and clear user data
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// export const useAuth = ()=> useContext(AuthContext)
