import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from "./components/navigation";

import Home from "./components/home";

import About from "./components/about";
import Partners from "./components/partners";

import Volunteer from "./components/volunteer";
import {
  //  Replace Hash with BrowserRouter if server fails
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/volunteer" exact component={Volunteer} />
        </Switch>
      </Router>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the site for Lunch by George
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
