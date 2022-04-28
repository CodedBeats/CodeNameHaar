import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Firebase
import { q } from "./firebase/firebaseConfig"
import { onSnapshot } from "firebase/firestore"


// real time collection data
onSnapshot(q, (snapshot) => {
  let posts = []
  snapshot.docs.forEach((doc) => {
    posts.push({ ...doc.data(), id: doc.id })
  })
  console.log(posts)
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals