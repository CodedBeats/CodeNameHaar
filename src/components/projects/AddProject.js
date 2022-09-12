// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import "../firebase/firebase-CRUD"

const AddProject = () => {
    
    return (
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Add A Project</h2>
                    
                </div>  
            </div>
        </div>
    );
}
 
export default AddProject;

