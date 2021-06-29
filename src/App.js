import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorialUpdate.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/list"} className="nav-link">
              Post
            </Link>
            </li>
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Add List
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/update/1"} className="nav-link">
                Update
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/list"]} component={TutorialsList} />
            <Route exact path="/create" component={AddTutorial} />
            <Route path="/update/:id" component={Tutorial} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
