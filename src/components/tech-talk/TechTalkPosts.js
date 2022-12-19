// dependencies
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

// style
import "./css/tech-talk.css"
import "../misc/css/page-container.css"
import "../misc/css/buttons.css"

// components/variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import DeleteTechTalkPost from "./DeleteTechTalkPost"
import { db, auth } from "../firebase/firebaseConfig"

const TechTalkPosts = () => {

    // define records as array
    const [posts, setPosts] = useState([])
    const [user] = useAuthState(auth)

    // populate records array from firebase database
    useEffect(() => {
        const postRef = collection(db, "techTalk")
        const q = query(postRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const posts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setPosts(posts)
            // console.log(records)
        })
    },[])
    
    return (
        
        <div className="container">
            <Navbar />
            
            <div className="page-container">
                <div className="body-container">
                    <h2>Tech Talk</h2>
                    {user && <Link to="/tech-talk/add" className="add-item">Add Post</Link>}

                    <div className="tech-talk-posts">
                        {
                        posts.map(({id, title, description}) => 
                            <div key={id} className="post-container">
                                <div className="post-field">
                                    <p className="field-title">{title}</p>
                                </div>
                                <div className="post-field">
                                    <p className="field-description">{description}</p>
                                </div>
                                {user && <DeleteTechTalkPost id={id} />}
                            </div>
                        )}
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    );
}
 
export default TechTalkPosts;