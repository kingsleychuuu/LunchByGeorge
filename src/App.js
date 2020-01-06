import React from 'react';
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
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/partners" exact component={Partners} />
          <Route path="/volunteer" exact component={Volunteer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
