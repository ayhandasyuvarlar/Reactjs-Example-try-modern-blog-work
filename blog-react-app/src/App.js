import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/create";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/about" >
            <AboutMe />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
       
      </div>
    </Router>
  );
}
export default App;
