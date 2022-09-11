// dependencies
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"

// dashboard
import Dashboard from "./components/dashboard/Dashboard"

// misc
import NotFound from "./components/misc/NotFound"

// posts
import Posts from "./components/projects/Projects"

// records
import Records from "./components/records/Records"
import AddRecord from "./components/records/AddRecord"



const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Posts />} />
                <Route path="/records" element={<Records />} />
                <Route path="/records/add-record" element={<AddRecord />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
 
export default App;
