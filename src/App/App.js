import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import useApp from '../CustomHooks/useApp'


function App() {

  const businessInfo = useApp()
  useEffect(() => {

  }, [])


  return (
    <div className="App">
      <h1>Howdy</h1>
    </div>
  );
}

export default App;
