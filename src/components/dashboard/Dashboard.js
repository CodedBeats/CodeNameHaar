// dependencies
import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Hexagons from "../misc/Hexagons"


const Dashboard = () => {

    const [style, setStyle] = useState(false)

    const handleClick = () => {
        // toggle
        setStyle(current => !current)
        // or
        // setStyle(true)
    }
    
    return ( 
        <div className="dashboard">
            <Navbar />
            <Hexagons />
            <div
                style={{
                    backgroundColor: style ? "red" : "green",
                    color: style ? "green" : "yellow",
                }}
                onClick={handleClick}
            >Toggle Me</div>
        </div>
    );
}
 
export default Dashboard;