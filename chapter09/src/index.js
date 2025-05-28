import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyj2cbDdeCI9R2WbTX9yBwg6lweksKAzg",
  authDomain: "projectofreact-aa671.firebaseapp.com",
  projectId: "projectofreact-aa671",
  storageBucket: "projectofreact-aa671.firebasestorage.app",
  messagingSenderId: "897757674304",
  appId: "1:897757674304:web:468aafc1c1d2269d4698a5",
  measurementId: "G-7MGBC16EZR"
};


firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
