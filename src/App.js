import Navbar from "./components/nav/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import Create from "./components/blog/Create";
import BlogDetails from "./components/blog/BlogDetails"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./components/errors/NotFound";

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Dashboard />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails />
                        </Route>
                        {/* this route goes at the bottom because "*" will catch all other routes, that way we catch the errors */}
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
