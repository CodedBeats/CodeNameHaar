// dependencies
import { Link } from "react-router-dom"
import { deleteDoc, doc } from "firebase/firestore"
import { toast } from "react-toastify"

// style
import "./css/records.css"

// components
import { db } from "../firebase/firebaseConfig"

const DeleteRecord = (props) => {

    // set up props
    let id = props.id

    const handleDelete = async() => {
        try {
            // delete document from records (await cause async func)
            await deleteDoc(doc(db, "records", id))
            toast("Record Deleted Successfully", {type: "success"})

        } catch (error) {
            toast("Error Deleting Record", {type: "error"})
            console.log(error)
        }
    }
    
    return ( 
        <div className="delete-container">
            <Link to="/records">
                <button className="gradiant-button" onClick={handleDelete}>Delete</button>
            </Link>
        </div>
    );
}
 
export default DeleteRecord;