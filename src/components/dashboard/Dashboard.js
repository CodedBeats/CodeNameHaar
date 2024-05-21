// dependencies
import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import Eyes from "../misc/Eyes"


const Dashboard = () => {
    
    return ( 
        <div className="dashboard container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <div className="synopsis-container">
                        <div className="synopsis-title">
                            <p>&lt;CodedBeats /&gt;</p>
                        </div>
                        <div className="synopsis-content">
                            Hi there, My name is Luca Haar. <br />
                            I'm a freelance website developer working in Melbourne, Australia. <br /><br />
                            This website shows off my skils through past projects and gives you a taste of what I'm currently working on. <br /><br />
                            {/* temp text */}
                            It's also very much a Work in Progress
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Dashboard;