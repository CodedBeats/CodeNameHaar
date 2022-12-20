// dependencies
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

// style
import "../misc/css/page-container.css"
import "../misc/css/buttons.css"
import "./css/projects.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteProject from "./DeleteProject"
import { db, auth } from "../firebase/firebaseConfig"

const Projects = () => {

    // define projects as array
    const [projects, setProjects] = useState([])
    const [user] = useAuthState(auth)

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
                    {user && <Link to="/projects/add" className="add-item">Add Project</Link>}

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
                                        {<img src={imageUrl} alt="img-title" className="project-image"/>}
                                    </div>
                                    <div className="text-container">
                                        <h3>{title}</h3>
                                        <p>{content}</p>
                                        <p>{createdAt.toDate().toDateString()}</p>
                                        {user && <DeleteProject id={id} imageUrl={imageUrl} />}
                                    </div>
                                </div> 
                            )
                        )}
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default Projects;