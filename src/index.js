import React from 'react';
import './index.css';
import { BrowserRouter ,Switch, Route} from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

import { hydrate, render } from "react-dom";
import App from './App';
 
const APP = (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/about' component = { About } />
    <Route exact path='/project' component = { Projects } />
    <Route exact path='/contact' component = { Contact }/>
  </Switch>
  </BrowserRouter>

)

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
