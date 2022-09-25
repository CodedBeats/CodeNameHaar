// dependencies
// import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import Hexagons from "../misc/Hexagons"


const Dashboard = () => {
    
    return ( 
        <div className="dashboard container">
            <Navbar />
            
            <div className="page-container">

                <Hexagons />

                <div className="body-container">
                    

                </div>
            </div>

            <Footer />
        </div>
    );
}
 
export default Dashboard;