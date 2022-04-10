import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdbkOeREKjkTZwnZXQNoKPn9wtAUEGTMI",
  authDomain: "codedbeats-47589.firebaseapp.com",
  projectId: "codedbeats-47589",
  storageBucket: "codedbeats-47589.appspot.com",
  messagingSenderId: "927207907473",
  appId: "1:927207907473:web:9997198672de5f2efc9f30"
};

// init firebase app
initializeApp(firebaseConfig)
// init services
const db = getFirestore()
// collection ref
const colRef = collection(db, "woods")
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
