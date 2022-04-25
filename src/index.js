import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Firebase
import { colRef } from "./firebase/firebaseConfig"
import { getDocs } from "firebase/firestore"


// get collection data
getDocs(colRef)
  .then((snapshot) => {
  // console.log(snapshot.docs)
  let woods = []
  snapshot.docs.forEach((doc) => {
    woods.push({ ...doc.data(), id: doc.id })
  })
  console.log(woods)
  })
  .catch((err) => {
    console.error(err.message)
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
