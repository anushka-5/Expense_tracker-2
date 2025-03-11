// src/IncompleteProfile.js

import React from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import

const IncompleteProfile = () => {
  const navigate = useNavigate();  // Updated usage of useNavigate

  const handleCompleteProfile = () => {
    navigate('/complete-profile');  // Navigate when the button is clicked
  };

  return (
    <div>
      <h1>Your profile is incomplete</h1>
      <button onClick={handleCompleteProfile}>Complete Profile</button>
    </div>
  );
};

export default IncompleteProfile;
