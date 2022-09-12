// dependencies
import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import Hexagons from "../misc/Hexagons"


const Dashboard = () => {

    const [style, setStyle] = useState(false)

    const handleClick = () => {
        // toggle (current => !current = !current /|\ !current => !current = current)
        setStyle(current => !current)
    }
    
    return ( 
        <div className="dashboard container">
            <Navbar />
            
            <div className="page-container">

                <Hexagons />

                <div className="body-container"
                    style={{
                        backgroundColor: style ? "yellow" : "green",
                        // color: style ? "green" : "yellow",
                    }}
                    onClick={handleClick}
                >
                    
                    Toggle Me
                    <h1>HAHAHAHAHA</h1>

                </div>
            </div>

            <Footer />
        </div>
    );
}
 
export default Dashboard;