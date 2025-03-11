// src/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can add logic to clear authentication data here (e.g., localStorage, sessionStorage)
    // For example:
    localStorage.removeItem('authToken');

    // Navigate to the login page after logout
    navigate('/login');
  };

  return (
    <div>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
