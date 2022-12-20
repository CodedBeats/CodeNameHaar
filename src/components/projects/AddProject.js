// dependencies
import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"
import "../misc/css/buttons.css"
import "./css/projects.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db, storage, auth } from "../firebase/firebaseConfig"


const AddProject = () => {
    // get user for auth
    const [user] = useAuthState(auth)
    // set progress to update progress bar
    const [progress, setProgress] = useState(0)
    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        tite: "",
        content: "",
        image : "",
        createdAt: Timestamp.now().toDate(),
    })

    // handle text and image state changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] })
    }

    const handleSubmit = () => {
        // check to see if any field hasn't been filled
        if (!formData.title || !formData.content|| !formData.image) {
            alert("Please fill all fields before submitting (img required)")
            return
        }

        // store images in a folder with the current time applied to each name so no files overwrite
        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, formData.image) 

        // handle image upload
        uploadImage.on("state_changed", (snapshot) => {
            // get progress percentage with equation: (current / total) * 100
            const progressPercentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progressPercentage)
        }, (err) => {
            console.log(err)
        },
        // callback func thats called when upload is complete
        () => {
            setFormData({
                title: "",
                content: "",
                image: "",
            })

            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                // get project collection from firebase
                const projectRef = collection(db, "projects")
                // set the title, content, image and timestamp
                addDoc(projectRef, {
                    title: formData.title,
                    content: formData.content,
                    imageUrl: url,
                    createdAt: Timestamp.now().toDate(),
                })
                .then(() => {
                    toast("Project Added Successfully", {type: "success"})
                    setProgress(0)
                })
                .catch((err) => {
                    toast("Error Adding Project", {type: "error"})
                })
            })
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
                        <h2>Add A Project</h2>

                        {/* title */}
                        <label htmlFor="" className="project-fields">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={formData.title}
                            onChange={(e) => handleChange(e)}
                        />

                        {/* text content */}
                        <label htmlFor="" className="project-fields">Content</label>
                        <textarea 
                            name="content" 
                            value={formData.content}
                            onChange={(e) => handleChange(e)}
                        />

                        {/* image  */}
                        <label htmlFor="" className="project-fields">Image</label>
                        <input 
                            type="file" 
                            name="image" 
                            accept="image/*" 
                            onChange={(e) => handleImageChange(e)}
                        />

                        {/* progress bar */}
                        {progress === 0 ? null :(
                        <div className="progress">
                            <div className="" style={{width: `${progress}%`}}>
                                {`Uploading Image ${progress}%`}
                            </div>
                        </div>
                        )}
                        {/* publish project button */}
                        <button className="add-item" onClick={handleSubmit}>Publish</button>
                    
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
 
export default AddProject;

