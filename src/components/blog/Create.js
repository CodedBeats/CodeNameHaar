import { useState } from "react";
import { useHistory } from "react-router-dom";

// css style
import "./css/create.css"

function Create()  {
    // hooks
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Luca")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    function handleSubmit(event) {
        event.preventDefault()
        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIsPending(false) // .then fires after fetch has been called, therefore isPending can go back to false
            history.push("/") // this redirects the user to the home page ("/") after a blog is added
        })
    }

    return ( 
        <div className="create">
            <h2>Add A New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} // triggers onChange to setTitle to what the user types
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)} // triggers onChange to setBody to what the user types
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)} // triggers onChange to setAuthor to what the user chooses
                >
                    <option value="Luca">Luca</option>
                    <option value="0 Ego Man">0 Ego Man</option>
                </select>
                {/* if thing on left is true, output thing on right */}
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding Blog...</button> }
                <br></br>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );

}
 
export default Create;