// dependencies
import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"


const Dashboard = () => {

    const [title, setTitle] = useState("<")
    
    return ( 
        <div className="dashboard container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <div className="synopsis-container">
                        {/* <div className="synopsis-title" onMouseOver={() => setTitle("<CodedBeats")}> */}
                            {/* {title}  */}
                        <div className="synopsis-title">
                            &lt;CodedBeats /&gt;
                        </div>
                        <div className="synopsis-content">
                            Hi there, I'm Luca Haar. <br />
                            Im a Website Develper working in Melbourne Australia.
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Dashboard;