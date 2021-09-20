import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import Navbar from './pages/Navbar'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import {Helmet} from 'react-helmet';

function App() {

  useEffect(()=>{
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  })

  return (
    <div className="App">

    <Navbar />
   <Routes />
      <header className="App-header">
<Helmet>
<meta charSet="utf-8"/>
<title> Hello</title>
<meta name="description" content="Prod Desc"/>
<link rel="cannonical" href='https://assesmenttestridwan.herokuapp.com/projects'/>
       <h2>Hello</h2>
</Helmet>
      </header>
    </div>
  );
}

export default App;
