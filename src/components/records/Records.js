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
                        records.map(({id, name, age}) => 
                            <div key={id} className="record-container" >
                                <div className="record-field">
                                    <Link to={`/record/${id}`}>
                                        <p className="field-title">{name}</p>
                                    </Link>
                                </div>
                                <div className="record-field">
                                    <p className="field-age">{age}</p>
                                </div>
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