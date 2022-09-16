// dependencies
import { useState } from "react"
import { deleteDoc, doc } from "firebase/firestore"
import { deleteObject, ref } from "firebase/storage"
import { toast } from "react-toastify"

// style

// components
import { db, storage } from "../firebase/firebaseConfig"

const DeleteRecord = (props) => {

    let id = props.id
    let imageUrl = props.imageUrl

    const handleDelete = async() => {
        try {
            // delete document from records
            await deleteDoc(doc(db, "records", id))
            toast("Record Deleted Successfully", {type: "success"})
            // delete image from storage
            const storageRef = ref(storage, imageUrl)
            await deleteObject(storageRef)

        } catch (error) {
            toast("Error Deleting Record", {type: "error"})
            console.log(error)
        }
    }
    
    return ( 
        <div>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default DeleteRecord;