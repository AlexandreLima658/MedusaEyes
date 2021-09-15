import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Home from './pages/Home'
import Products from './pages/Products'
import Team from'./pages/Team'
import About from './pages/About'

export default () => 
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path='/team' component={Team}/>
        <Route path='/about' component={About}/>


      </Switch>
    </Router>
  </>
