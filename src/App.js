// dependencies
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"


// ==components==
// dashboard
import Dashboard from "./components/dashboard/Dashboard"

// misc
// import NotFound from "./components/misc/NotFound"

// records
import Records from "./components/records/Records"
import AddRecord from "./components/records/AddRecord"
import Projects from "./components/projects/Projects"
import AddProject from "./components/projects/AddProject"



const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/add" element={<AddProject />} />
                <Route path="/records" element={<Records />} />
                <Route path="/records/add" element={<AddRecord />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
