// dependencies
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { updateDoc, doc, onSnapshot } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"

// style
import "../misc/css/page-container.css"
import "./css/edit-record.css"

// components
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import { db, auth } from "../firebase/firebaseConfig"

const EditRecord = () => {
    const navigate = useNavigate();

    const {id} = useParams();
    const [user] = useAuthState(auth);
    const [record, setRecord] = useState(null);
    const [selectedField, setSelectedField] = useState("");
    const [fieldValue, setFieldValue] = useState("");
    
    // set data as object rather than individual states
    const [formData, setFormData] = useState({
        age: "",
        birthday: "",
    });

    const docRef = doc(db, "records", id)
    useEffect(() => {
        // Fetch the initial record data and populate the form
        onSnapshot(docRef, (snapshot) => {
            const data = snapshot.data();
            setRecord({ ...data, id: snapshot.id });
            setFormData({ ...data });
        });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // console.log({ ...formData, [e.target.name]: e.target.value }, docRef)
    };

    const handleUpdate = () => {
        updateDoc(docRef, formData)
        .then(() => {
            toast("Record Updated Successfully", {type: "success"});

            // Route to a different page after successful submission
            navigate("/records");
        })
        .catch(error => {
            toast("Error Updating Record", {type: "error"});
        })
    }

    // store record fields in an arr just for cleaner code
    const mainFields = [
        { name: "age", placeholder: "Age" },
        { name: "birthday", placeholder: "Birthday" },
        { name: "gender", placeholder: "Gender", type: "dropdown", options: ["-- Choose --", "Male", "Female", "Other"] },
        { name: "info", placeholder: "Information" },
        { name: "job", placeholder: "Job" },
        { name: "lastMeet", placeholder: "Last Meet" },
        { name: "livingStatus", placeholder: "Living Status" },
        { name: "location", placeholder: "Location" },
        { name: "name", placeholder: "Name" },
        { name: "relationshipStatus", placeholder: "Relationship Status" },
    ];
    const additionalFields = [
        { name: "favouriteFood", label: "Favourite Food" },
        { name: "dislikes", label: "Dislikes" },
        { name: "hobbies", label: "Hobbies" },
        { name: "tattoos", label: "Tattoos" },
        { name: "family", label: "Family" },
    ];

    // additional fields
    const additionalInfoOptions = ["favouriteFood", "dislikes", "hobbies", "tattoos", "family"];
    const handleFieldSelect = (option) => {
        setSelectedField(option);
    };
    const handleFieldValueChange = (e) => {
        setFieldValue(e.target.value);
    };
    const handleAddAdditionalField = () => {
        if (selectedField && fieldValue) {
            // Update the formData or record object with the additional field
            setFormData((prevData) => ({
                ...prevData,
                [selectedField]: fieldValue,
            }));
    
            // Clear selected field and field value
            setSelectedField("");
            setFieldValue("");
        }
    };
    

    return (
        <>
        { user ? (  
            <div className="container">
                <Navbar />

                <div className="page-container">
                    <div className="body-container">
                        <div className="edit-record-form-container">
                            <h2>Update Record</h2>
                            <div className="edit-record-form-box">

                                {/* display all (main) editable fields */}
                                {mainFields.map((field) => (
                                    <div className="edit-record-field-box" key={field.name}>
                                        <label htmlFor="">{field.placeholder}</label>
                                        {field.type === "dropdown" ? (
                                            <select className="edit-record-dropdown"
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                            >
                                                {field.options.map((option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                            />
                                        )}
                                    </div>
                                ))}


                                {/* extra fields */}
                                {/* only display if field/value exists */}
                                {additionalFields.map((field) => (
                                    formData[field.name] && (
                                        <div className="edit-record-field-box" key={field.name}>
                                            <label htmlFor="">{field.label}</label>
                                            <input
                                                type="text"
                                                name={field.name}
                                                placeholder={field.label}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    )
                                ))}

                                {/* edit record btn */}
                                <div className="edit-record-btn-container">
                                    <button className="gradiant-button" onClick={handleUpdate}>Update</button>
                                </div>
                            </div>

                            {/* add additional fields */}
                            <div className="edit-record-additional-field-section">
                                <h2>Add More Information</h2>
                                <div className="edit-record-field-box dropdown">
                                    <label htmlFor="">Select Field</label>
                                    <select
                                        value={selectedField}
                                        onChange={(e) => handleFieldSelect(e.target.value)}
                                    >
                                        <option value="">-- Choose --</option>
                                        {additionalInfoOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {selectedField && (
                                    <div className="edit-record-field-box">
                                        <label htmlFor="">{selectedField}</label>
                                        <input
                                            type="text"
                                            value={fieldValue}
                                            onChange={handleFieldValueChange}
                                        />
                                    </div>
                                )}
                                <div className="edit-record-add-field-button">
                                    <button className="gradiant-button" onClick={handleAddAdditionalField}>
                                        Add Field
                                    </button>
                                </div>
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