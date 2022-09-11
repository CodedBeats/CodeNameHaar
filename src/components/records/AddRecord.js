// style
import "../misc/css/page-container.css"

// components
import Navbar from "../nav/Navbar"
import "../firebase/firebase-CRUD"

const AddRecord = () => {
    
    return (
        <div>
            <Navbar />

            <div className="page-container">
                <div className="body-container">

                    <h2>Add Record</h2>

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
        </div>
    );
}
 
export default AddRecord;