// style
import "./css/navbar.css"

// dependencies
import { Link } from "react-router-dom"


const Navbar = () => {
    
    return ( 
        <div className="navbar">
            <ul className="nav-link-container">
                <Link className="nav-link" to="/">
                    <li>Home</li>
                </Link>

                <Link className="nav-link" to="../posts/add">
                    <li className="nav-link">Add Post</li>
                </Link>

                <Link className="nav-link" to="../posts/add">
                    <li className="nav-link">Add Post</li>
                </Link>
            </ul>
        </div>
    );
}
 
export default Navbar;