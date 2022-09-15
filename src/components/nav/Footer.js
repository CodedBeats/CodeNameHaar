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
    const [showingModal, setShowingModal] = useState(false)
    
    return ( 
        <div className="footer container">
            
            <Link className="footer-icon-link" to="#" onClick={() => { 
                setTitleText("Github")
                setBodyText("https://github.com/CodedBeats")
                setShowingModal(true)
                // console.log(titleText, bodyText, showingModal)
            }}>
                <i className="fa fa-brands fa-github" />
            </Link>

            <Link className="footer-icon-link" to="#" onClick={() => { 
                setTitleText("Email")
                setBodyText("luca.haar@icloud.com")
                setShowingModal(true)
                // console.log(titleText, bodyText, showingModal)
            }}>
                <i className="fa fa-solid fa-envelope" />
            </Link>

            {showingModal && <Modal title={titleText} body={bodyText} onClose={() => setShowingModal(false)} />}

        </div>
    );
}
 
export default Footer;