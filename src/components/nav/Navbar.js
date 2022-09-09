// style
import "./css/navbar.css"
import ".././misc/css/page-container.css"

// dependencies
import { Link } from "react-router-dom"


const Navbar = () => {
    
    return ( 
        <div className="navbar">
            <div className="container">
                <div className="nav-logo-container">
                    <Link className="nav-logo" to="/">
                        CodedBeats
                    </Link>
                </div>

                <div className="nav-link-container">
                    <ul>
                        <li>
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-link" to="../posts/add">
                                Add Post
                            </Link>
                        </li>
                    </ul>
                    
                    <ul>
                        <li>
                            <Link className="nav-link" to="#">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
 
export default Navbar;