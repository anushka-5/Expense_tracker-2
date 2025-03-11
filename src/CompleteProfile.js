// src/CompleteProfile.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { getAuth, updateProfile } from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';

const CompleteProfile = () => {
  const [userData, setUserData] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Updated usage of useNavigate

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserData(snapshot.val());
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);

      // Update profile
      updateProfile(user, { displayName: userData.name })
        .then(() => {
          set(userRef, userData)
            .then(() => {
              navigate('/profile-complete');  // Navigate after update
            })
            .catch((error) => {
              console.error('Error updating data:', error);
            });
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Complete Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default CompleteProfile;
