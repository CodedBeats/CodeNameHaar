import "./firebase/firebase-crud"

const App = () => {
    
    return (
        <div>
            <h2>Firebase Firestore</h2>

            <form className="add">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" required></input>
                <label htmlFor="density">Density:</label>
                <input type="text" name="density" required></input>

                <button>Add a new wood</button>
            </form>

            <form className="delete">
                <label htmlFor="id">Document id:</label>
                <input type="text" name="id"></input>

                <button>Delete a wood</button>
            </form>

        </div>
    );
}
 
export default App;
