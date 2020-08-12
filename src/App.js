import React from 'react';
import './styles/main.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";



function App() {
  return (
    <Router>
    <div className="body">
       <Navbar className = "nav"></Navbar>
        <Switch>
          <Route exact path="/"  component={Shop}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact"  component={Contact}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
