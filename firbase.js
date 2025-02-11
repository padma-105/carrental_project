// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIkilT6WMvYmVpmSzZrOqM4JqT--l4moQ",
  authDomain: "carsapi-cb25c.firebaseapp.com",
  projectId: "carsapi-cb25c",
  storageBucket: "carsapi-cb25c.firebasestorage.app",
  messagingSenderId: "1024153367197",
  appId: "1:1024153367197:web:105f3524232285951d1a74",
  measurementId: "G-2QJH14ETPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
