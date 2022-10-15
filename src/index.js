import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'

// fonts
import "./fonts/Coda-Regular.ttf"
import "./fonts/OpenSans-VariableFont_wdth,wght.ttf"
import "./fonts/PressStart2P-Regular.ttf"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <ToastContainer />
    </React.StrictMode>
);
