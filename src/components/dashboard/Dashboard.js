// dependencies
import { useState } from "react"

// style
import ".././misc/css/page-container.css"
import "./css/dashboard.css"

// components
import Navbar from "../nav/Navbar"
import Hexagons from "../misc/Hexagons"
// import ChangeStyle from "../misc/ChangeStyle";


const Dashboard = () => {

    const [styleChange, setStyleChange] = useState(true)
    
    return ( 
        <div className="dashboard">
            <Navbar />
            <Hexagons />
            {/* only works by commenting ChangeStyle -> saving -> un-commenting -> saving -> then the component works */}
            {/* <ChangeStyle className=".dashboard" property="background" value1="rgb(187, 88, 88)" value2="rgb(201, 201, 201)" style={styleChange} handleClick={() => setStyleChange(!styleChange)}/> */}
        </div>
    );
}
 
export default Dashboard;