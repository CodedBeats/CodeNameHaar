// dependencies
import { Link } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

// style
import "./css/profile.css"
import ".././misc/css/page-container.css"
import "../misc/css/buttons.css"

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
        {key: 1, value: "seperate profiles based on user"},
        {key: 2, value: "add record text to edit record form"},
        {key: 3, value: "fix multiple fonts"},
        // https://dev.to/annequinkenstein/adding-fonts-to-create-react-app-3ed7
        {key: 4, value: "structure project for consistent indentation"},
        {key: 5, value: "structure projects to have the same display as records (projects with smaller boxes, project will full view)"},
        {key: 6, value: "style single record item"},
        {key: 7, value: "style projects"},
        {key: 8, value: "style not found page"},
        {key: 9, value: "style profile page"},
        {key: 11, value: "move hexagons to js lab and make landing page show most recent [project, tech talk] and a short about me"},
        {key: 12, value: "change footer so it links to website and figure out email link"},
        {key: 13, value: "change these lists to be stored in firebase"},
    ]
    const completedTodos = [
        {key: 1, value: "add styling to records and add record form"},
        {key: 2, value: "react form"},
        {key: 3, value: "change form field requirements to not require image"},
        {key: 4, value: "create footer"},
        {key: 5, value: "move the add page link for projects and records to their individual pages and remove from navbar"},
        {key: 6, value: "Add login auth"},
        {key: 7, value: "add profile page"},
        {key: 8, value: "create not found page for no page and missing permissions"},
        {key: 9, value: "change records to small boxes with just name and click takes to better viewing page"},
        {key: 10, value: "move delete button to individual post and onlly allow if logged in"},
        {key: 11, value: "add a Tech Talk page for blog posts about cool tech stuff I've found"},
        {key: 12, value: "style records"},
        {key: 13, value: "add edit record functionality"},
        {key: 14, value: "JS lab fun"},
    ]
    const wishlist = [
        {key: 1, value: "eyeballs on image that follow cursor"},
        {key: 2, value: "search functionality for projects and records "},
        {key: 3, value: "scroll to top button"},
        {key: 4, value: "change comments to use better comments extension"},
        {key: 5, value: "firebase security rules for people who can login but can't do what I can"},
        {key: 6, value: "loading bar for project image upload"},
        {key: 7, value: "relations to people where records can be searched for their similarities"},
        {key: 8, value: "lazy loading on more full pages"},
    ]
    const urgent = [
        {key: 1, value: "dashboard title at different screen widths"},
        {key: 3, value: "adjust px to vh% / vw% values"},
        {key: 4, value: "wrap child divs in relative div of % to get aspect ration and then position absolute with 100% width and height"},
        {key: 5, value: "set image container max-width to 200px mobile view"},
        {key: 6, value: "change max-width to 600px"},
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
    let listUrgent = urgent.map(({key, value}) => 
        <Item key={key} text={value} />
    )
    
    return ( 
        <>
            {/* if logged in -> display page, else NotFound page */}
            { user ? (
                <div className="container">
                    <Navbar />
                    <div className="page-container">
                        <div className="body-container">
                            <h1>Profile</h1>
                            <p style={{color: "white"}}>Vercel Working?</p>

                            <div className="planning-board">
                                <h2 className="list-header">Todos</h2>
                                <ul className="list-container todo-container">
                                    {listTodos}
                                </ul>

                                <h2 className="list-header">Completed</h2>
                                <ul className="list-container completed-container">
                                    {listCompletedTodos}
                                </ul>

                                <h2 className="list-header">Wishlist</h2>
                                <ul className="list-container wishlist-container">
                                    {listWishlist}
                                </ul>

                                <h2 className="list-header">Urgent</h2>
                                <ul className="list-container urgent-container">
                                    {listUrgent}
                                </ul>
                            </div>

                            <div className="logout-button">
                                <Link to="/CodeNameHaar">
                                    <button className="add-item" onClick={() => {signOut(auth)}}>Logout</button>
                                </Link>
                            </div>

                            {/* JS Lab experiments */}
                            <div className="lab-button">
                                <Link to="/labratory">
                                    <button className="add-item">Labratory</button>
                                </Link>
                            </div>
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
        <li className="list-item">{text}</li>
    )
}

export default Profile;