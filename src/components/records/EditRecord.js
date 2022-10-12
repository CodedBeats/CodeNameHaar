/* 
https://softauthor.com/firebase-firestore-update-document-data-updatedoc/
https://travis.media/how-to-use-firebase-with-react/#20211130-updateDoc
*/

// dependencies
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { addDoc, collection, Timestamp, updateDoc, doc, onSnapshot } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"
import "./css/add-record.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db, auth } from "../firebase/firebaseConfig"

const EditRecord = () => {

    const {id} = useParams()
    const [user] = useAuthState(auth)
    const [record, setRecord] = useState(null)
    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        age: "",
        birthday: "",
    })

    const docRef = doc(db, "records", id)
    useEffect(() => {
        onSnapshot(docRef, (snapshot) => {
            setRecord({...snapshot.data(), id: snapshot.id})
        })
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log({ ...formData, [e.target.name]: e.target.value }, docRef)
    };

    const handleUpdate = () => {
        updateDoc(docRef, formData)
        .then(() => {
            toast("Record Updated Successfully", {type: "success"})
        })
        .catch(error => {
            toast("Error Updating Record", {type: "error"})
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
                            <h2>Update Record</h2>

                            <div className="field-box">
                                {/* age */}
                                <label htmlFor=""></label>
                                <input 
                                    type="text" 
                                    name="age" 
                                    placeholder="Age"
                                    text = "Age"
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

                            {/* publish record button */}
                            <button className="gradiant-button" onClick={handleUpdate}>Update</button>
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

export default EditRecord;