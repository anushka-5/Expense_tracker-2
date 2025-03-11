// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

// Export necessary Firebase functions
export { 
  auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification, 
  signOut, 
  updateProfile, 
  sendPasswordResetEmail, 
  db, 
  getDoc, 
  setDoc, 
  doc 
};
