// dependencies
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"
import "./css/add-record.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db, auth } from "../firebase/firebaseConfig"


const AddRecord = () => {
    const navigate = useNavigate();

    const [user] = useAuthState(auth)
    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        age: "",
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

    // handle add record
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

            // Route to a different page after successful submission
            navigate("/records");
        })
        .catch((err) => {
            toast("Error Adding Record", {type: "error"})
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
                            <h2>Add A Record</h2>

                            <div className="field-box">
                                {/* age */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="age" 
                                    placeholder="Age"
                                    value={formData.age}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            <div className="field-box">
                                {/* birthday */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="birthday"  
                                    placeholder="Birthday"
                                    value={formData.birthday}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>

                            <div className="field-box dropdown">
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
                            </div>
                            
                            <div className="field-box">
                                {/* info */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="info"  
                                    placeholder="Information"
                                    value={formData.info}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            
                            <div className="field-box">
                                {/* job */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="job"  
                                    placeholder="Job"
                                    value={formData.job}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            
                            <div className="field-box">
                                {/* last meet */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="lastMeet"   
                                    placeholder="Last Meet"
                                    value={formData.lastMeet}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            
                            <div className="field-box">
                                {/* living status */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="livingStatus"   
                                    placeholder="Living Status"
                                    value={formData.livingStatus}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            
                            <div className="field-box">
                                {/* location */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="location"   
                                    placeholder="Location"
                                    value={formData.location}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            
                            <div className="field-box">
                                {/* name */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="name"   
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            
                            <div className="field-box">
                                {/* relationship status */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="relationshipStatus"   
                                    placeholder="Relationship Status"
                                    value={formData.relationshipStatus}
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
 
export default AddRecord;