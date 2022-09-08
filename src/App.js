// dependencies
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"

// dashboard
import Dashboard from "./components/dashboard/Dashboard"

// misc
import NotFound from "./components/misc/NotFound"

// posts
import Posts from "./components/posts/Posts"
import AppPost from "./components/posts/AddPost"



const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/add" element={<AppPost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
 
export default App;
