// dependencies
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"

// general
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/auth/Login"
import Profile from "./components/dashboard/Profile"

// misc
import NotFound from "./components/misc/NotFound"

// CRUD pages
import Records from "./components/records/Records"
import Record from "./components/records/Record"
import AddRecord from "./components/records/AddRecord"
import EditRecord from "./components/records/EditRecord"

import Projects from "./components/projects/Projects"
import AddProject from "./components/projects/AddProject"



const App = () => {
    
    return (
        <Router>
            <Routes>
                {/* landing */}
                <Route path="/CodeNameHaar" element={<Dashboard />} />
                <Route path="/" element={<Dashboard />} />

                {/* auth and profile */}
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />

                {/* projects */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/add" element={<AddProject />} />

                {/* active endeavors */}

                {/* records */}
                <Route path="/records" element={<Records />} />
                <Route path="/records/add" element={<AddRecord />} />
                <Route path="/records/:id" element={<Record />} />
                <Route path="/records/edit/:id" element={<EditRecord />} />

                {/* not found */}
                <Route path="*" element={<NotFound notFound={true} wrongPermissions={false} />} />
            </Routes>
        </Router>
    );
}

export default App;
