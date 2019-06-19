import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main>
            <h1>Rock Paper Scissors</h1>
            <Route exact path="/" component={Home} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
