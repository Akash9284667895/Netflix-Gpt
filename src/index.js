import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


  // Your Firebase config here...
  const firebaseConfig = {
    apiKey: "AIzaSyCp5gMYM6J3CogKs95SccKjqdf4O6BuCag",
    authDomain: "netflixgpt-1d5fd.firebaseapp.com",
    projectId: "netflixgpt-1d5fd",
    storageBucket: "netflixgpt-1d5fd.appspot.com",
    messagingSenderId: "989845188948",
    appId: "1:989845188948:web:acc4ca453434e9fa4498c1",
    measurementId: "G-GE8G3DWXJJ"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App auth={auth} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
