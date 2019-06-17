import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import HumanVSCompContainer from './humanVsComp/HumanVSCompContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>  
          <main>
            <h1>Rock Paper Scissors</h1>
            <Route exact path="/" component={HumanVSCompContainer}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
