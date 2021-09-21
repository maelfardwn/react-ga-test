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

const rootElemet = document.getElementById("root");
if(rootElemet.hasChildNodes()){
hydrate( <BrowserRouter>
  <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/about' component = { About } />
      <Route exact path='/projects' component = { Projects } />
      <Route exact path='/contact' component = { Contact }/>
    </Switch>
    </BrowserRouter>, rootElemet)
}else{
  render( <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/about' component = { About } />
        <Route exact path='/projects' component = { Projects } />
        <Route exact path='/contact' component = { Contact }/>
      </Switch>
      </BrowserRouter>, rootElemet)
}
reportWebVitals();