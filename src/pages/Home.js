
import '../App.css';
import Routes from '../routes'
import Navbar from './Navbar'
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import london from '../assets/london.jpg'
function Home() {

  useEffect(()=>{
    ReactGa.initialize('UA-207998390-1')
    ReactGa.pageview('/')
  })

  return (
    <div className="App">

      <header className="App-header">
      <div style={{width:'400px',height:'200px'}}>
      <img width='200px' height='100px' src={london}/>
       <h2>Hello</h2>
       <p>Lorem ipsum dorek skanskn ejrhjshd sajhdjhjasdh jhehhe</p>
      </div>
      </header>
    </div>
  );
}

export default Home;
