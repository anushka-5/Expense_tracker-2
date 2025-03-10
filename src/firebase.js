// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyA45lh-0hXjXtjF0hiL6MbidUhz8kelbOM",
  authDomain: "expense-tracker-2-72e9e.firebaseapp.com",
  projectId: "expense-tracker-2-72e9e",
  storageBucket: "expense-tracker-2-72e9e.firebasestorage.app",
  messagingSenderId: "72175515367",
  appId: "1:72175515367:web:e7d0120890fba7bc1c1442",
  measurementId: "G-2H30PHB347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export the authentication and analytics for use in other files
export { auth, createUserWithEmailAndPassword, analytics };
