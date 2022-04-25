

const App = () => {
    
    return (
        <div>
            <h2>Firebase Firestore</h2>

            <form class="add">
                <label for="title">Title:</label>
                <input type="text" name="title" required></input>
                <label for="density">Density:</label>
                <input type="text" name="density" required></input>

                <button>Add a new wood</button>
            </form>

            <form class="delete">
                <label for="id">Document id:</label>
                <input type="text" name="id"></input>

                <button>Delete a wood</button>
            </form>

        </div>
    );
}
 
export default App;
