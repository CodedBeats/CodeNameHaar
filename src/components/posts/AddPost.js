import "../firebase/firebase-CRUD"

const AddPost = () => {
    
    return (
        <div>
            <h2>Firebase Firestore</h2>

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
    );
}
 
export default AddPost;

// Add post form
// https://formik.org/docs/overview