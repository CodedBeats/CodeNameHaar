// dependencies
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"

// general
import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/auth/Login"
import Profile from "./components/dashboard/Profile"
import NotFound from "./components/misc/NotFound"

// misc
// import NotFound from "./components/misc/NotFound"

// CRUD pages
import Records from "./components/records/Records"
import Record from "./components/records/Record"
import AddRecord from "./components/records/AddRecord"
import Projects from "./components/projects/Projects"
import AddProject from "./components/projects/AddProject"
import TechTalkPosts from "./components/tech-talk/TechTalkPosts"
import AddTechTalkPost from "./components/tech-talk/AddTechTalkPost"



const App = () => {
    
    return (
        <Router>
            <Routes>
                {/* landing */}
                <Route path="/" element={<Dashboard />} />

                {/* auth and profile */}
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />

                {/* blog */}
                <Route path="/tech-talk" element={<TechTalkPosts />} />
                <Route path="/tech-talk/add" element={<AddTechTalkPost />} />

                {/* projects */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/add" element={<AddProject />} />

                {/* records */}
                <Route path="/records" element={<Records />} />
                <Route path="/record/:id" element={<Record />} />
                <Route path="/records/add" element={<AddRecord />} />

                {/* not found */}
                <Route path="*" element={<NotFound notFound={true} wrongPermissions={false} />} />
            </Routes>
        </Router>
    );
}

export default App;
