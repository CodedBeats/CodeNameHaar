// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import "../firebase/firebase-CRUD"
import Footer from "../nav/Footer"

const AddRecord = () => {
    
    return (
        <div className="container">
            <Navbar />

            <div className="page-container">
                <div className="body-container">

                    <h2>Add A Record</h2>

                    <form className="add">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" required></input>
                        <label htmlFor="density">Content:</label>
                        <input type="text" name="content" required></input>

                        <button>Add A New Post</button>
                    </form>

                    <form className="delete">
                        <label htmlFor="id">Post id:</label>
                        <input type="text" name="id"></input>

                        <button>Delete A Post</button>
                    </form>
                
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default AddRecord;