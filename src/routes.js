import React from 'react';
import { Switch, Route } from 'react-router';
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
const Routes = () => {
  return (
    <Switch>
      <Route path='/about' component = { About } />
      <Route path='/projects' component = { Projects } />
      <Route path='/contact' component = { Contact }/>
      <Route path='/' />
    </Switch>

  )
}
export default Routes