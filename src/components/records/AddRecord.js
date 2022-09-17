// dependencies
import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { ref  } from "firebase/storage"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db } from "../firebase/firebaseConfig"


const AddRecord = () => {

    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        tite: "",
        content: "",
        createdAt: Timestamp.now().toDate(),
    })

    // handle text and image state changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = () => {
        // check to see if any field hasn't been filled
        if (!formData.title || !formData.content) {
            alert("Please fill all fields before submitting")
            return
        }

        // get record collection from firebase
        const recordRef = collection(db, "records")
        // set the title, content, image and timestamp
        addDoc(recordRef, {
            title: formData.title,
            content: formData.content,
            createdAt: Timestamp.now().toDate(),
        })
        .then(() => {
            toast("Record Added Successfully", {type: "success"})
        })
        .catch((err) => {
            toast("Error Adding Record", {type: "error"})
        })
    }
    

    return (
        <div className="container">
            <Navbar />

            <div className="page-container">
                <div className="body-container">
                    <h2>Add A Record</h2>

                    {/* title */}
                    <label htmlFor="">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title}
                        onChange={(e) => handleChange(e)}
                    />

                    {/* text content */}
                    <label htmlFor="">Content</label>
                    <textarea 
                        name="content" 
                        value={formData.content}
                        onChange={(e) => handleChange(e)}
                    />
                    {/* publish record button */}
                    <button className="" onClick={handleSubmit}>Publish</button>
                
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default AddRecord;