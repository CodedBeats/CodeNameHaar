// dependencies
import { Link } from "react-router-dom"
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth"

// style
import "../misc/css/page-container.css"

// Experiments
import OrbitParticles from "./OrbitParticles.js"
import StationaryAnimations from "./StationaryAnimations.js"

// components + variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import NotFound from "../misc/NotFound"
import { auth } from "../firebase/firebaseConfig"

const Experiments = () => {

    // firebase user auth
    const [user] = useAuthState(auth)

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    
    return ( 
        <>
            {/* if logged in -> display page, else NotFound page */}
            { user ? (
                <div className="container">
                    <Navbar />
                    <div className="page-container">
                        <div className="body-container">
                            <OrbitParticles cursorPosition={cursorPosition} onCursorPositionChanged={setCursorPosition} />
                            <StationaryAnimations />
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

// render mini individual experiments, pass id={id} as parameter

export default Experiments;