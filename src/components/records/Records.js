// dependencies
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"

// style
import "../misc/css/page-container.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteRecord from "./DeleteRecord"
import { db } from "../firebase/firebaseConfig"

const Records = () => {

    const [records, setRecords] = useState([])

    // get records from database
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

                    <Link className="" to="/records/add">
                        Add Record
                    </Link>

                    <div>
                        {
                            records.length === 0 ? (
                                <p>No Records Found</p>
                            ):(
                                records.map(({id, title, content, imageUrl, createdAt}) => 
                                    <div key={id}>
                                        <div className="image-container">
                                            <img src={imageUrl} alt="img-title" />
                                        </div>
                                        <div className="text-container">
                                            <h3>{title}</h3>
                                            <h4>{createdAt.toDate().toDateString()}</h4>
                                            <p>{content}</p>
                                            <DeleteRecord id={id} imageUrl={imageUrl} />
                                        </div>
                                    </div> 
                                )
                                
                            )
                        }
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default Records;