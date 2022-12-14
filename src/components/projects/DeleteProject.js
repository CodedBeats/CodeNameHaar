// dependencies
import { deleteDoc, doc } from "firebase/firestore"
import { deleteObject, ref } from "firebase/storage"
import { toast } from "react-toastify"

// style
import "../misc/css/buttons.css"

// components
import { db, storage } from "../firebase/firebaseConfig"

const DeleteProject = (props) => {

    // set up props
    let id = props.id
    let imageUrl = props.imageUrl

    const handleDelete = async() => {
        try {
            // delete document from records (await cause async func)
            await deleteDoc(doc(db, "projects", id))
            toast("Project Deleted Successfully", {type: "success"})
            // delete image from storage
            const storageRef = ref(storage, imageUrl)
            await deleteObject(storageRef)

        } catch (error) {
            toast("Error Deleting Project", {type: "error"})
            console.log(error)
        }
    }
    
    return ( 
        <div>
            <button className="gradiant-button" onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default DeleteProject;