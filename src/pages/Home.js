
import '../App.css';
import Routes from '../routes'
import OpenGraph from 'opengraph-react'
import Navbar from './Navbar'
import ReactGa from 'react-ga'
import Helmet from 'react-helmet'
import React, { Component, useEffect } from 'react';
import london from '../assets/london.jpg'
import MetaDecorator from '../components/MetaDecorator';
import { render } from '@testing-library/react';

import MetaTags from 'react-meta-tags';

class Home extends Component {

  componentDidMount(){
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  
  }

  render(){
  return (
    <div className="App">
     <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
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
