// src/Signup.js
import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './firebase'; // Import the necessary functions

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate input fields
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Attempt to create a new user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User has successfully signed up');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
