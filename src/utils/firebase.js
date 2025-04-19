// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFqhGfhUzOJFEhdUhjMxFdpdUNGYzYzu8",
  authDomain: "netflixgpt-3008e.firebaseapp.com",
  projectId: "netflixgpt-3008e",
  storageBucket: "netflixgpt-3008e.firebasestorage.app",
  messagingSenderId: "814015469834",
  appId: "1:814015469834:web:236e0e10555bd0261842f3",
  measurementId: "G-JCN4FDDF7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();