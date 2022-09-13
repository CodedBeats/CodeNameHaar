// dependencies
import { Link } from "react-router-dom"

// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"

const Projects = () => {
    
    return (
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Projects</h2>

                    <Link className="" to="/projects/add">
                        Add Project
                    </Link>
                    
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default Projects;