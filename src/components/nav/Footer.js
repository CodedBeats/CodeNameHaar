// dependencies
import { Link } from "react-router-dom"
import "../../../node_modules/font-awesome/css/font-awesome.min.css"

// style
import "./css/footer.css"
import ".././misc/css/page-container.css"

const Footer = () => {
    
    
    return ( 
        <div className="footer container">
            
            <Link className="footer-icon-link" to="/">
                <i className="fa fa-brands fa-github" />
            </Link>
            <Link className="footer-icon-link" to="/">
                <i className="fa fa-solid fa-envelope" />
            </Link>

        </div>
    );
}
 
export default Footer;