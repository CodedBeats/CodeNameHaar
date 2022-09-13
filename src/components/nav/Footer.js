// dependencies
import { useState } from "react"
import { Link } from "react-router-dom"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

// style
import "./css/footer.css"
import ".././misc/css/page-container.css"

// components
import Modal from "../misc/Modal"


const Footer = () => {
    
    const [titleText, setTitleText] = useState("")
    const [bodyText, setBodyText] = useState("")
    
    const openModal = (title, body) => {
        
        setTitleText(title)
        setBodyText(body)
        
        let modal = document.getElementById("modal-box")
        modal.style.display = "block"
    }
    
    return ( 
        <div className="footer container">
            <div id="modal-component-container">
                <Modal id="modal-box" title={titleText} body={bodyText} />
            </div>
            
            <Link className="footer-icon-link" to="#" onClick={() => { openModal("Github", "https://github.com/CodedBeats") }}>
                <i className="fa fa-brands fa-github" />
            </Link>
            <Link className="footer-icon-link" to="#" onClick={() => { openModal("Email", "luca.haar@icloud.com") }}>
                <i className="fa fa-solid fa-envelope" />
            </Link>

        </div>
    );
}
 
export default Footer;