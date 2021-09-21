import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import Navbar from './pages/Navbar'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Helmet} from 'react-helmet';

import london from './assets/london.jpg'
import { Link } from 'react-router-dom';
function App() {

  useEffect(()=>{
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  })

  return (
    <div className="App">
    <nav>
      <Link to="/contact"/>
      <Link to="/about"/>
      <Link to="/project"/>

    </nav>
   <Helmet>

    <meta name="description" content="Description this "/>
    
    <meta property="og:title" content='opengraph test homepage'/>
    <meta property="og:description" content='This is homepage using opengraph for testing'/>
    <meta property="og:description" content="Description this"/>
    <meta property="og:image" content='https://assesmenttestridwan.herokuapp.com/assets/london.jpg'/>
    <meta property="og:url" content='https://assesmenttestridwan.herokuapp.com/'/>
    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image:alt" content='London Pict With Twitter image alt'/> 
    <meta property="twitter:description" content="Description this"/>
    </Helmet>
    <header className="App-header">
      <div style={{width:'400px',height:'200px'}}>
      <img width='200px' height='100px' src={london}/>
       <h2>Hello</h2>
       <p>This is home page . and you will see more information from another page</p>
      </div>
      </header>
      
    </div>
  );
}

export default App;
