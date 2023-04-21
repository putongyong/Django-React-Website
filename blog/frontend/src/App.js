import './App.css';
import icon from './images/favicon.ico';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.setAttribute('href', icon);
}, []);


  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
