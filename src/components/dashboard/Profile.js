// dependencies
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

// style
import "./css/profile.css"
import ".././misc/css/page-container.css"

// components + variables
import Navbar from "../nav/Navbar"
import Footer from "../nav/Footer"
import NotFound from "../misc/NotFound"
import { auth } from "../firebase/firebaseConfig"

const Profile = () => {

    // firebase user auth
    const [user] = useAuthState(auth)

    // set todos and completed
    const todos = [
        {key: 1, value: "change records to small boxes with just name and click takes to better viewing page"},
        {key: 8, value: "add edit record functionality"},
        {key: 9, value: "add fonts"},
        {key: 10, value: "structure project for consistent indentation"},
        {key: 11, value: "move delete button to individual post and onlly allow if logged in"},
    ]
    const completedTodos = [
        {key: 1, value: "[X] add styling to records and add record form"},
        {key: 2, value: "[X] react form"},
        {key: 3, value: "[X] change form field requirements to not require image"},
        {key: 4, value: "[X] create footer"},
        {key: 5, value: "[X] move the add page link for projects and records to their individual pages and remove from navbar"},
        {key: 6, value: "[X] Add login auth"},
        {key: 7, value: "[X] add profile page"},
        {key: 8, value: "[X] create not found page for no page and missing permissions"},
    ]
    const wishlist = [
        {key: 1, value: "eyeballs on image that follow cursor"},
        {key: 2, value: "search functionality for projects and records "},
        {key: 3, value: "scroll to top button"},
        {key: 4, value: "change comments to use better comments extension"},
        {key: 5, value: "firebase security rules for people who can login but can't do what I can"},
        {key: 6, value: "loading bar for project image upload"},
    ]
    let listTodos = todos.map(({key, value}) => 
        <Item key={key} text={value} />
    )
    let listCompletedTodos = completedTodos.map(({key, value}) => 
        <Item key={key} text={value} />
    )
    let listWishlist = wishlist.map(({key, value}) => 
        <Item key={key} text={value} />
    )
    
    return ( 
        <>
            {/* if logged in -> display page, else NotFound page */}
            { user ? (
                <div className="container">
                    <Navbar />
                    <div className="page-container">

                        <div className="planning-board">
                            <h2>Todos</h2>
                            <ul>
                                {listTodos}
                            </ul>

                            <h2>Completed</h2>
                            <ul>
                                {listCompletedTodos}
                            </ul>

                            <h2>Wishlist</h2>
                            <ul>
                                {listWishlist}
                            </ul>
                        </div>

                        <div className="logout">
                            <Link to="/">
                                <button className="" onClick={() => {signOut(auth)}}>Logout</button>
                            </Link>
                        </div>

                        <Link className="" to="/projects/add">
                            Add Project
                        </Link>

                        <Link className="" to="/records/add">
                            Add Record
                        </Link>

                        {/* JS Lab experiments */}
                        <div className="lab-container">

                        </div>

                    </div>
                    <Footer />
                </div>
            ):(
                <>
                    <NotFound notFound={false} wrongPermissions={true} />
                </>
            )}
        </>
    );
        
}

const Item = (props) => {
    let text = props.text

    return (
        <li>{text}</li>
    )
}

export default Profile;