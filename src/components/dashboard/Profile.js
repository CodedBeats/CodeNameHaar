// dependencies
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"

// style
import "./css/profile.css"
import ".././misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { auth } from "../firebase/firebaseConfig"

const Profile = () => {

    const [user] = useAuthState(auth)
    
    return ( 
        <>
            {/* if logged in -> display page, else NotFound */}
            { user ? (
                <div className="container">
                    <Navbar />
                    <div className="page-container">

                    <Link className="" to="/projects/add">
                        Add Project
                    </Link>

                    <Link className="" to="/records/add">
                        Add Record
                    </Link>

                    </div>
                    <Footer />
                </div>
            ):(
                <>
                    Not Found Page
                </>
            )}
        </>
    );
        
}

export default Profile;