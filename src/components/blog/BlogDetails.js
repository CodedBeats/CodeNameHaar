import { useParams } from "react-router-dom";
import useFetch from "../custom-hooks/UseFetch";
import { useHistory } from "react-router-dom";

// css style
import "./css/blogdetails.css"

function BlogDetails() {
    const {id} = useParams()
    const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory() // this redirects the user to the home page ("/") after a blog is added

    function handleDelete() {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE"
        }).then(() => {
            history.push("/")
        })
    }


    return ( 
        <div className="blog-details">
            {/* if thing on left is true, output thing on right */}
            { isLoading && <div> Loading... </div> }
            { error && <div> {error} </div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Post</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;