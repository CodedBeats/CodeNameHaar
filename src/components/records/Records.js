// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import "../firebase/firebase-CRUD"

const Records = () => {
    
    return (
        <div className="dashboard">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Records</h2>
                    
                </div>  
            </div>
        </div>
    );
}
 
export default Records;