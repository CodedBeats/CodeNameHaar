import "./css/navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar">
            <h3>The Shit Dump</h3>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;