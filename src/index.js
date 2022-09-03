import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Firebase import
import { q } from "./firebase/firebase-config"
import { onSnapshot } from 'firebase/firestore';


// Real time collection data
onSnapshot(q, (snapshot) => {
    let posts = []
    snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id })
    })
    console.log(posts)
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
