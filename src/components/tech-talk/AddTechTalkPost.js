// dependencies
import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db, auth } from "../firebase/firebaseConfig"


const AddTechTalkPost = () => {

    const [user] = useAuthState(auth)
    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        createdAt: Timestamp.now().toDate(),
    })

    // handle text and image state changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // handle add record
    const handleSubmit = () => {
        // check to see if any field hasn't been filled
        if (!formData.title || !formData.description) {
            alert("Please fill all fields before publishing")
            return
        }

        // get record collection from firebase
        const postRef = collection(db, "techTalk")
        // set each field
        addDoc(postRef, {
            title: formData.title,
            description: formData.description,
            createdAt: Timestamp.now().toDate(),
        })
        .then(() => {
            toast("Post Added Successfully", {type: "success"})
        })
        .catch((err) => {
            toast("Error Adding Post", {type: "error"})
        })
    }
    

    return (
        <>
        {/* if logged in -> display page, else NotFound */}
        { user ? (  
            <div className="container">
                <Navbar />

                <div className="page-container">
                    <div className="body-container">
                        <div className="form-container">
                            <div className="form-box">
                                <h2>Add A Post</h2>

                                <div className="field-box">
                                    {/* title */}
                                    <label htmlFor=""></label>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        placeholder="Title"
                                        value={formData.title}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                <div className="field-box">
                                    {/* description */}
                                    <label htmlFor=""></label>
                                    <input 
                                        type="text" 
                                        name="description"  
                                        placeholder="Description"
                                        value={formData.description}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>

                                {/* publish record button */}
                                <button className="gradiant-button" onClick={handleSubmit}>Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        ):(
            <>
                Not Found Page
            </>
        )}
        </>
    );
}
 
export default AddTechTalkPost;