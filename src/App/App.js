import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import moment from 'moment';
import useApp from '../CustomHooks/useApp'
import JobsContainer from '../JobsContainer/JobsContainer'



function App() {
  const [userId, setUseId ] = useState(3)
  const [ currentBusinessList, setBusinessList ] = useState([])
  const [ availableJobsList, setAvailableJobsList ] = useState([])
  const { businessList, availableJobs } = useApp()

  useEffect(() => {
    setBusinessList(businessList)
    setAvailableJobsList(availableJobs)
  })

  return (
    <section data-testid="App" className="App">
      <nav data-testid="nav-bar" className="nav-bar">
        <h1 data-testid="main-header" className="main-header" >Nine2Five</h1>
      </nav>
      <main data-testid="main-page" className="mainn-page">
        <section data-testid="user-info-section" className="userInfo-section">
          <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
          <img data-testid="user-image" className="user-image" />
          <h5 data-testid="user-rating" className="user-rating">Your Rating: 4.9</h5>
        </section>
        <JobsContainer jobs={availableJobsList} currentUser={userId} />
      </main>
    </section>
  );
}

export default App;
