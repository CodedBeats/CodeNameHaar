import { Link } from "react-router-dom";

// css style
import "./css/bloglist.css"

function BlogList({blogs, title}) {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h4>{blog.title}</h4>
                        <p>Written By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;