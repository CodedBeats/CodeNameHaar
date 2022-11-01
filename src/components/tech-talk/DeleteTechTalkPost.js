// dependencies
import { Link } from "react-router-dom"
import { deleteDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"

// style
import "../misc/css/buttons.css"

// components
import { db } from "../firebase/firebaseConfig"

const DeleteTechTalkPost = (props) => {

    // set up props
    let id = props.id

    const handleDelete = async() => {
        try {
            // delete document from records (await cause async func)
            await deleteDoc(doc(db, "techTalk", id))
            toast("Post Deleted Successfully", {type: "success"})

        } catch (error) {
            toast("Error Deleting Post", {type: "error"})
            console.log(error)
        }
    }
    
    return ( 
        <div className="gradiant-button-container">
            <Link to="/tech-talk">
                <button className="gradiant-button" onClick={handleDelete}>Delete</button>
            </Link>
        </div>
    );
}
 
export default DeleteTechTalkPost;