// dependencies

// style
import ".././misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"


const NotFound = (props) => {

    const notFound = props.notFound
    const wrongPermissions = props.wrongPermissions
    
    return (
        <div className="container">
            <Navbar />
            <div className="page-container">

                {
                    // if notFound == true -> display not found page
                    notFound &&
                    <>
                        This page doesn't exist
                    </>
                }

                {
                    // if wrongPermissions == true -> display wrong permissions page
                    wrongPermissions &&
                    <>
                        You dont't have permission to view this page, if you have an account you can login or you can send an email to ask for one
                    </>
                }

            </div>
            <Footer />
        </div>
    );
}
 
export default NotFound;