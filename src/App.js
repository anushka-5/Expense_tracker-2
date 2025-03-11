import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Logout from './Logout';  // Remove this line

 // Use Routes and Route from React Router v6
  // Assuming Logout component exists

function App() {
  return (
    <Routes>
      <Route path="/Logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
