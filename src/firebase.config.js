// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_isXgXl0f0nXUVINDnQy-QmqXEHW_bV4",
  authDomain: "react-authentication-bf379.firebaseapp.com",
  projectId: "react-authentication-bf379",
  storageBucket: "react-authentication-bf379.firebasestorage.app",
  messagingSenderId: "871367125135",
  appId: "1:871367125135:web:426ef37e6d62b0493de8fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
