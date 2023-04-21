import './App.css';
import icon from './images/favicon.ico';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
}, []);
  


  return (
    <div className="App"> 
      <Navbar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
