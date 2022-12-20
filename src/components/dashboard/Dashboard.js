// dependencies
import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"


const Dashboard = () => {

    const [possition, setPossition] = useState("0%")
    const [backgroundWidth, setBackgroundWidth] = useState("500px")
    
    return ( 
        <div className="dashboard container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <div className="synopsis-container">
                        <div className="synopsis-title" 
                            onMouseEnter={() => {setPossition("57%"); setBackgroundWidth("80px")}} 
                            onMouseLeave={() => {setPossition("0%"); setBackgroundWidth("500px")}}
                        >
                            {/* this should be temporary */}
                            <p className="mobile-title">&lt;CodedBeats /&gt;</p>
                            <p className="left">
                                &lt;
                            </p>
                            <p className="middle"
                                style={{
                                    width: possition,
                                }}
                            >
                                CodedBeats&nbsp;
                            </p>
                            <p className="right"
                                style={{
                                    width: backgroundWidth
                                }}>
                                /&gt;
                            </p>
                            
                        </div>
                        <div className="synopsis-content">
                            Hi there, My name is Luca Haar. <br />
                            I'm a freelance website developer working in Melbourne, Australia. <br /><br />
                            This website is a protfolio of my projects and any cool discoveries I find while I develop my skills as a programmer.
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Dashboard;