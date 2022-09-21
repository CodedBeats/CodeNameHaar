// dependencies
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

// style
import "../misc/css/page-container.css"
import "./css/records.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteRecord from "./DeleteRecord"
import { db } from "../firebase/firebaseConfig"

const Records = () => {

    // define records as array
    const [records, setRecords] = useState([])

    // populate records array from firebase database
    useEffect(() => {
        const recordRef = collection(db, "records")
        const q = query(recordRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const records = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setRecords(records)
            // console.log(records)
        })
    },[])
    
    return (
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Records</h2>

                    <div className="records">
                        {
                        // if no records: display message
                        records.length === 0 ? (
                            <p className="no-records">No Records Found</p>
                        ):(
                        // else: cycle through records array to display each record in this format
                        records.map(({id, age, birthday, createdAt, gender, info, job, lastMeet, livingStatus, location, name, relationshipStatus}) => 
                            <div key={id} className="record-container" >
                                <div className="record-field">
                                    <p className="field-title">Name</p>
                                    <p className="field-value">{name}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Info</p>
                                    <p className="field-value">{info}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Age</p>
                                    <p className="field-value">{age}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Birthday</p>
                                    <p className="field-value">{birthday}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Gender</p>
                                    <p className="field-value">{gender}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Job</p>
                                    <p className="field-value">{job}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Last Meet</p>
                                    <p className="field-value">{lastMeet}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Living Status</p>
                                    <p className="field-value">{livingStatus}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Location</p>
                                    <p className="field-value">{location}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Relationship Status</p>
                                    <p className="field-value">{relationshipStatus}</p>
                                </div>
                                <div className="record-field">
                                    <p className="field-title">Created On</p>
                                    <p className="field-value">{createdAt.toDate().toDateString()}</p>
                                </div>
                                <DeleteRecord id={id} />
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default Records;