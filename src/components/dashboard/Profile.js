// dependencies
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

// style
import "./css/profile.css"
import ".././misc/css/page-container.css"
import "../misc/css/buttons.css"

// components + variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import NotFound from "../misc/NotFound"
import { auth } from "../firebase/firebaseConfig"

const Profile = () => {

    // firebase user auth
    const [user] = useAuthState(auth)
    
    return ( 
        <>
            {/* if logged in -> display page, else NotFound page */}
            { user ? (
                <div className="container">
                    <Navbar />
                    <div className="page-container">
                        <div className="body-container">
                            <h1>Profile</h1>

                            <div className="logout-button">
                                <Link to="/CodeNameHaar">
                                    <button className="add-item" onClick={() => {signOut(auth)}}>Logout</button>
                                </Link>
                            </div>
                            
                            <div className="to-try-container">
                                <ul>
                                    <li>
                                        <a href="https://p5js.org/" target="_blank" rel="noreferrer">P5 JS</a>
                                    </li>
                                    <li>
                                        <a href="https://sonic-pi.net/" target="_blank" rel="noreferrer">Sonic Pi</a>
                                    </li>
                                    <li>
                                        <a href="https://codepen.io/jackrugile/pen/DdYrrV" target="_blank" rel="noreferrer">Codepen Particles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            ):(
                <>
                    <NotFound notFound={false} wrongPermissions={true} />
                </>
            )}
        </>
    );
        
}

export default Profile;