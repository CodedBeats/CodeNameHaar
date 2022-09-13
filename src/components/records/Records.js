// dependencies
import { Link } from "react-router-dom"

// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"

const Records = () => {
    
    return (
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">

                    <h2>Records</h2>

                    <Link className="" to="/records/add">
                        Add Record
                    </Link>

                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default Records;