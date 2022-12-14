// dependencies
import { useAuthState } from "react-firebase-hooks/auth"

// style
import "../misc/css/page-container.css"
import "./css/experiments.css"

// Experiments

// components + variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import NotFound from "../misc/NotFound"
import { auth } from "../firebase/firebaseConfig"

// stuff
// https://getcssscan.com/css-buttons-examples

const Experiments = () => {

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
                            <div className="canvasy-container">
                            </div>
                            <div className="buttons-container">
                                <div className="hover-button-container btn">
                                    <div className="hover-button">
                                        <div className="hover-button-text">Button 1</div>
                                    </div>
                                </div>
                                <button className="button-2 btn">
                                    <span className="button-2-text">Button 2</span>
                                </button>
                                <button className="button-3 btn">
                                    Button 3
                                </button>
                                <button className="button-4 btn">
                                    Button 4
                                </button>
                            </div>
                            <div className="to-try-container">
                                <ul>
                                    <li>
                                        <a href="https://p5js.org/" target="_blank" rel="noreferrer">P5 JS</a>
                                    </li>
                                    <li>
                                        <a href="https://sonic-pi.net/" target="_blank" rel="noreferrer">Sonic Pi</a>
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

export default Experiments;