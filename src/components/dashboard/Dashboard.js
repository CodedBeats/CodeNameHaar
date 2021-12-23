import BlogList from "../blog/BlogList";
import useFetch from "../custom-hooks/UseFetch";

//css
import "./css/dashboard.css"

function Dashboard() {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="dashboard">
            {/* if thing on left is true, output thing on right */}
            { isLoading && <div> Loading... </div> }
            { error && <div> {error} </div> }
            { blogs && <BlogList blogs={blogs} title="All Dumps" /> }
        </div>
    );
}
 
export default Dashboard;
