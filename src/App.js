import React ,{Component}from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import Home from './pages/Home'
import Products from './pages/Products'
import Arquivos from './pages/Arquivos'
import About from'./pages/About'

class App extends Component{ 
  render(){
    return( 
      <>
      <Router>
       <NavBar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/products" component={Products}/>
            <Route path='/arquivos' component={Arquivos}/>
            <Route path='/about' component={About}/>
          </Switch>
      </Router>
    
  </>
)}
}
export default App