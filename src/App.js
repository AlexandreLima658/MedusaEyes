import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Analise from './pages/Analise'
import About from './pages/About'
import Step from './pages/Step'
import Arquivos from "./pages/Arquivos"
import './App.css'
export default function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' exact component={Analise} />
            <Route path='/step' component={Step} />
            <Route path='/arquivos' component={Arquivos} />
         </Switch>
      </Router>
    </>
  )
}
