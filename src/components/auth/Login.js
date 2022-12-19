// dependencies
import { useState } from "react"
import { useNavigate } from "react-router"
// import { addDoc, collection, Timestamp } from "firebase/firestore"
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"
import "../misc/css/buttons.css"
import "./css/login.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { auth } from "../firebase/firebaseConfig"


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let navigate = useNavigate()

    // handle login
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            // change to user dashboard
            navigate("/profile")
        } catch (err) {
            toast(err.code, {type: "error"})
        }
    }

    return ( 
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <div className="login-container">
                        <h2>Login</h2>

                        <label className="login-label">Email</label>
                        <input 
                            type="email"
                            className=""
                            placeholder="Enter Email"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        <label className="login-label">Password</label>
                        <input 
                            type="password"
                            className=""
                            placeholder="Enter Password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />

                        <div className="add-item">
                            <button onClick={handleLogin}>Login</button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Login;