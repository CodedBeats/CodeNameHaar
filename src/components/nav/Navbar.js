// dependencies
import { Link, useMatch, useResolvedPath } from "react-router-dom"

// style
import "./css/navbar.css"
import ".././misc/css/page-container.css"



const Navbar = () => {
    
    return ( 
        <div className="navbar">
            <Link className="nav-logo" to="/">
                CodedBeats
            </Link>

            <ul>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/records">Records</CustomLink>
                <CustomLink to="/records/add">Add Record</CustomLink>
                {/* <CustomLink to="/">Login</CustomLink> */}
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