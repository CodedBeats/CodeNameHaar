// dependencies
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, onSnapshot } from "firebase/firestore"

// style
import "../misc/css/page-container.css"
// import "./css/record.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteRecord from "./DeleteRecord"
import { db } from "../firebase/firebaseConfig"

const Record = () => {

    const {id} = useParams()
    const [record, setRecord] = useState(null)

    useEffect(() => {
        const docRef = doc(db, "records", id)
        onSnapshot(docRef, (snapshot) => {
            setRecord({...snapshot.data(), id: snapshot.id})
        })
    })

    return ( 
        <div className="container">
            <Navbar />
            <div className="page-container">
                <div className="body-container">
                    
                    { record && 
                        <div className="record-container" >
                            <div className="record-field">
                                <p className="field-title">Name</p>
                                <p className="field-value">{record.name}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Info</p>
                                <p className="field-value">{record.info}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Age</p>
                                <p className="field-value">{record.age}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Birthday</p>
                                <p className="field-value">{record.birthday}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Gender</p>
                                <p className="field-value">{record.gender}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Job</p>
                                <p className="field-value">{record.job}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Last Meet</p>
                                <p className="field-value">{record.lastMeet}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Living Status</p>
                                <p className="field-value">{record.livingStatus}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Location</p>
                                <p className="field-value">{record.location}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Relationship Status</p>
                                <p className="field-value">{record.relationshipStatus}</p>
                            </div>
                            <div className="record-field">
                                <p className="field-title">Created On</p>
                                <p className="field-value">{record.createdAt.toDate().toDateString()}</p>
                            </div>
                            <DeleteRecord id={record.id} />
                        </div>
                    } 
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Record;