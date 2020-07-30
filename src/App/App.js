import React, { useState, useEffect } from 'react'
import './App.css';
import useApp from '../CustomHooks/useApp'


function App() {

  const businessList = useApp()
  

  return (
    <div className="App">
      <h1>Howdy</h1>
    </div>
  );
}

export default App;
