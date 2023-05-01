import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './images/favicon.ico';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavContainer from './components/NavContainer';
import Bloglist from './components/Bloglist';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
}, []);
  


  return (
    <div className="App"> 
      <NavContainer/>
      <div className='Main'>
        <Header/>
        <Bloglist/>
        <About/>
        <Contact/>
        <Footer/>        
      </div>
    </div>
  );
}

export default App;
