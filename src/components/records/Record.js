// dependencies
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { doc, onSnapshot } from "firebase/firestore"

// style
import "../misc/css/page-container.css"
import "../misc/css/buttons.css"
// import "./css/record.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteRecord from "./DeleteRecord"
import { db } from "../firebase/firebaseConfig"

const Record = () => {

    const {id} = useParams()
    const [record, setRecord] = useState(null)

    // store record fields in an arr just for cleaner code
    const mainFields = [
        { key: 'name', title: 'Name' },
        { key: 'info', title: 'Info' },
        { key: 'age', title: 'Age' },
        { key: 'birthday', title: 'Birthday' },
        { key: 'gender', title: 'Gender' },
        { key: 'job', title: 'Job' },
        { key: 'lastMeet', title: 'lLast Meet' },
        { key: 'livingStatus', title: 'Living Status' },
        { key: 'location', title: 'Location' },
        // ... add other main fields
    ];

    const additionalFields = [
        { key: 'favouriteFood', title: 'Favourite Food' },
        { key: 'dislikes', title: 'Dislikes' },
        { key: 'hobbies', title: 'Hobbies' },
        { key: 'tattoos', title: 'Tattoos' },
        { key: 'family', title: 'Family' },
    ];

    useEffect(() => {
        const docRef = doc(db, "records", id)
        onSnapshot(docRef, (snapshot) => {
            setRecord({...snapshot.data(), id: snapshot.id})
            // console.log({...snapshot.data()})
        })
    }, [id])

    return ( 
        <div className="container">
            <Navbar />
            <div className="page-container">
                <div className="body-container">
                    
                    { record && 
                        <div className="record-container" >
                            {/* Main fields */}
                            {mainFields.map(field => (
                                <div className="record-field-container" key={field.key}>
                                    <label>{field.title}</label>
                                    <p>{record[field.key]}</p>
                                </div>
                            ))}

                            {/* additional fields */}
                            {/* only display if field/value exists */}
                            {additionalFields.map(field => (
                                record[field.key] && (
                                    <div className="record-field-container" key={field.key}>
                                        <label>{field.title}</label>
                                        <p>{record[field.key]}</p>
                                    </div>
                                )
                            ))}

                            {/* delete record */}
                            <DeleteRecord id={record.id} />

                            <Link to={`/records/edit/${id}`} className="add-item">Edit</Link>
                        </div>
                    } 
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Record;