// style
import "./css/navbar.css"
import ".././misc/css/page-container.css"

// dependencies
import { NavLink } from "react-router-dom"


const Navbar = () => {
    
    return ( 
        <div className="navbar">
            <div className="body-container">
                <div className="nav-logo-container">
                    <NavLink className="nav-logo" to="/">
                        CodedBeats
                    </NavLink>
                </div>

                <div className="nav-link-container">
                    <ul>
                        <li>
                            <NavLink to="/"
                                // className={isActive => 
                                //     `nav-link ${!isActive ? "active-link" : ""}`
                                // }

                                className="nav-link"
                                activeClassName="active-link"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="../projects">
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="../records">
                                Records
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="../records/add-record">
                                Add Record
                            </NavLink>
                        </li>
                    </ul>
                    
                    <ul>
                        <li>
                            <NavLink className="nav-link" to="#">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
 
export default Navbar;