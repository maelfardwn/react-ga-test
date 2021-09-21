import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {hydrate, render} from 'react-dom'
import reportWebVitals from './reportWebVitals';
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home';
const APP = (
  <BrowserRouter>
  <Switch>
      <Route path='/about' component = { About } />
      <Route path='/projects' component = { Projects } />
      <Route path='/contact' component = { Contact }/>
      <Route exact path='/' component={Home} />
    </Switch>
    </BrowserRouter>
)
const rootElemet = document.getElementById("root");
if(rootElemet.hasChildNodes()){
hydrate(APP, rootElemet)
}else{
  render(APP, rootElemet)
}