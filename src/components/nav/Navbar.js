// dependencies
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"

// style
import "./css/navbar.css"
import ".././misc/css/page-container.css"

// components
import { auth } from "../firebase/firebaseConfig"

const Navbar = () => {

    const [user] = useAuthState(auth)
    
    return ( 
        <div className="navbar container">
            <Link className="nav-logo" to="/">
                CodedBeats
            </Link>

            <ul>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/records">Records</CustomLink>

                {/* if logged in -> logout, else login */}
                {
                user ? (
                    <>
                    <CustomLink to="/profile">Profile</CustomLink>
                    </>
                ):(
                    <>
                    <CustomLink to="/login">Login</CustomLink>
                    </>
                )
                }
            </ul>
        </div>
    );
}


// == Custom Link component for Navbar ==
let CustomLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? 'active' : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;