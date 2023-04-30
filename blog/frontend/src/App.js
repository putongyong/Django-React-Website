import './App.css';
import icon from './images/favicon.ico';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavContainer from './components/NavContainer';
import Bloglist from './components/Bloglist';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
}, []);
  


  return (
    <div className="App"> 
      <NavContainer/>
      <Header/>
      <Bloglist/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
