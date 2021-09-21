
import '../App.css';
import Routes from '../routes'
import OpenGraph from 'opengraph-react'
import Navbar from './Navbar'
import ReactGa from 'react-ga'
import React, { Component, useEffect } from 'react';
import london from '../assets/london.jpg'
import MetaDecorator from '../components/MetaDecorator';
import { render } from '@testing-library/react';

class Home extends Component {

  componentDidMount(){
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  
  }

  render(){
  return (
    <div className="App">
    <OpenGraph  
  site={'Homepage With library'}  
  appId='73e81d57-f87b-467b-9c64-a062b5dd21ba'  
  size={'small'}    
/>
      <MetaDecorator description="This is Ridwan test homepage opengraph" title="opengraph Test" imageUrl={london} imageAlt="Homepage with london image"/>
      <header className="App-header">
      <div style={{width:'400px',height:'200px'}}>
      <img width='200px' height='100px' src={london}/>
       <h2>Hello</h2>
       <p>This is home page . and you will see more information from another page</p>
      </div>
      </header>
    </div>
  );}
}

export default Home;
