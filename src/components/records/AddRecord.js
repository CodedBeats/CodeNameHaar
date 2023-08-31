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

    // store record fields in an arr just for cleaner code
    const fields = [
        { name: 'age', label: 'Age', type: 'text', placeholder: 'Age' },
        { name: 'birthday', label: 'Birthday', type: 'text', placeholder: 'Birthday' },
        { name: 'gender', label: 'Gender', type: 'select', options: ['male', 'female', 'other'] },
        { name: 'info', label: 'Information', type: 'text', placeholder: 'Information' },
        { name: 'job', label: 'Job', type: 'text', placeholder: 'Job' },
        { name: 'lastMeet', label: 'Last Meet', type: 'text', placeholder: 'Last Meet' },
        { name: 'livingStatus', label: 'Living Status', type: 'text', placeholder: 'Living Status' },
        { name: 'location', label: 'Location', type: 'text', placeholder: 'Location' },
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Name' },
        { name: 'relationshipStatus', label: 'Relationship Status', type: 'text', placeholder: 'Relationship Status' },
    ];
    

    return (
        <>
        {/* if logged in -> display page, else NotFound */}
        { user ? (  
            <div className="container">
                <Navbar />

                <div className="page-container">
                    <div className="body-container">
                        <div className="add-record-form-container">
                        <div className="add-record-form-box">
                            <h2>Add A Record</h2>

                            {fields.map(field => (
                                <div className="add-record-field-box" key={field.name}>
                                    <label className="add-record-label" htmlFor={field.name}>{field.label}</label>
                                    {field.type === 'select' ? (
                                        <select
                                            className="add-record-select"
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                        >
                                            <option value="">-- Choose --</option>
                                            {field.options.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            className="add-record-input"
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                        />
                                    )}
                                </div>
                            ))}

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