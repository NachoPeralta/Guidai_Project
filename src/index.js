import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD68-F_zsws_TcjWNFEoKUH8fYDcvI7sKE",
  authDomain: "guidai.firebaseapp.com",
  projectId: "guidai",
  storageBucket: "guidai.appspot.com",
  messagingSenderId: "950095964876",
  appId: "1:950095964876:web:4bf7ed306a1d52d5b23069"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
