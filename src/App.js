import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import Navbar from './pages/Navbar'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Helmet} from 'react-helmet';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import london from './assets/london.jpg'
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
function App() {

  useEffect(()=>{
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  })

  return (
    <Switch>
    <Route exact path='/about' component = { About } />
    <Route exact path='/projects' component = { Projects } />
    <Route exact path='/contact' component = { Contact }/>
    <Route exact path='/' component={Home} />
  </Switch>
  );
}

export default App;
