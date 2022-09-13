// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import "../firebase/firebase-CRUD"
import Footer from "../nav/Footer"

const AddProject = () => {
    
    return (
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Add A Project</h2>
                    
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default AddProject;

