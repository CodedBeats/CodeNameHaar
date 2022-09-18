// dependencies
import { useState } from "react"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"
import "./css/records.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db } from "../firebase/firebaseConfig"


const AddRecord = () => {

    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        age: null,
        birthday: "",
        createdAt: Timestamp.now().toDate(),
        gender: "",
        info: "",
        job: "",
        lastMeet: "",
        livingStatus: "",
        location: "",
        name: "",
        relationshipStatus: "",
    })

    // handle text and image state changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        // check to see if any field hasn't been filled
        if (
            !formData.age || !formData.birthday || 
            !formData.gender || !formData.info || 
            !formData.job || !formData.lastMeet || 
            !formData.livingStatus || !formData.location || 
            !formData.name || !formData.relationshipStatus
            ) {
            alert("Please fill all fields before submitting")
            return
        }

        // get record collection from firebase
        const recordRef = collection(db, "records")
        // set each field
        addDoc(recordRef, {
            age: formData.age,
            birthday: formData.birthday,
            createdAt: Timestamp.now().toDate(),
            gender: formData.gender,
            info: formData.info,
            job: formData.job,
            lastMeet: formData.lastMeet,
            livingStatus: formData.livingStatus,
            location: formData.location,
            name: formData.name,
            relationshipStatus: formData.relationshipStatus,
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

                    {/* age */}
                    <label htmlFor="">Age</label>
                    <input 
                        type="text" 
                        name="age" 
                        value={formData.age}
                        onChange={(e) => handleChange(e)}
                    />

                    {/* birthday */}
                    <label htmlFor="">Birthday</label>
                    <input 
                        type="text" 
                        name="birthday"  
                        value={formData.birthday}
                        onChange={(e) => handleChange(e)}
                    />

                    {/* gender */}
                    <label htmlFor="">Gender</label>
                    <select
                        name="gender"
                        value={formData.favColor}
                        onChange={handleChange}
                    >
                        <option value="">-- Choose --</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    
                    {/* info */}
                    <label htmlFor="">Information</label>
                    <textarea 
                        name="info" 
                        value={formData.info}
                        onChange={(e) => handleChange(e)}
                    />
                    
                    {/* job */}
                    <label htmlFor="">Job</label>
                    <input 
                        type="text" 
                        name="job"  
                        value={formData.job}
                        onChange={(e) => handleChange(e)}
                    />
                    
                    {/* last meet */}
                    <label htmlFor="">Last Meet</label>
                    <input 
                        type="text" 
                        name="lastMeet"   
                        value={formData.lastMeet}
                        onChange={(e) => handleChange(e)}
                    />
                    
                    {/* living status */}
                    <label htmlFor="">Living Status</label>
                    <input 
                        type="text" 
                        name="livingStatus"   
                        value={formData.livingStatus}
                        onChange={(e) => handleChange(e)}
                    />
                    
                    {/* location */}
                    <label htmlFor="">Location</label>
                    <input 
                        type="text" 
                        name="location"   
                        value={formData.location}
                        onChange={(e) => handleChange(e)}
                    />
                    
                    {/* name */}
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        name="name"   
                        value={formData.name}
                        onChange={(e) => handleChange(e)}
                    />
                    
                    {/* relationship status */}
                    <label htmlFor="">Relationship Status</label>
                    <input 
                        type="text" 
                        name="relationshipStatus"   
                        value={formData.relationshipStatus}
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