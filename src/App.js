import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import Analise from './pages/Analise'
import About from './pages/About'
import Arquivos from "./pages/Arquivos"
import Teste from './pages/teste'
import Multiple from './pages/multiple'
import File from './pages/File'


import './App.css'
export default function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' exact component={Analise} />
            <Route path='/arquivos' component={Arquivos} />
            <Route path='/teste' component={Teste} />
            <Route path='/multiple' component={Multiple} />
            <Route path='/file' component={File} />
            
            
            
         </Switch>
      </Router>
    </>
  )
}
