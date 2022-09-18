// dependencies
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

// style
import "../misc/css/page-container.css"
import "./css/projects.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteProject from "./DeleteProject"
import { db } from "../firebase/firebaseConfig"

const Projects = () => {

    // define projects as array
    const [projects, setProjects] = useState([])

    // populate projects array from firebase database
    useEffect(() => {
        const projectRef = collection(db, "projects")
        const q = query(projectRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const projects = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setProjects(projects)
            // console.log(projects)
        })
    },[])
    
    return (
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Projects</h2>

                    <Link className="" to="/projects/add">
                        Add Project
                    </Link>

                    <div className="projects">
                        {
                        // if no projects: display message
                        projects.length === 0 ? (
                            <p className="no-projects">No Projects Found</p>
                        ):(
                            // else: cycle through projects array to display each project in this format
                            projects.map(({id, title, content, imageUrl, createdAt}) => 
                                <div key={id} className="project-container" >
                                    <div className="image-container">
                                        {<img src={imageUrl} alt="img-title" />}
                                    </div>
                                    <div className="text-container">
                                        <h3>{title}</h3>
                                        <p>{content}</p>
                                        <p>{createdAt.toDate().toDateString()}</p>
                                        <DeleteProject id={id} imageUrl={imageUrl} />
                                    </div>
                                </div> 
                            )
                        )
                        }
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default Projects;