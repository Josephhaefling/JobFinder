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
    <section className="App">
      <nav>
        <p>Nine2Five</p>
      </nav>
      <main>
        <section data-testid="user-info-section">
          <h3 data-testid="user-gretting">Welcome Back, Michael!</h3>
          <img data-testid="user-image" />
          <h5 data-testid="user-rating">Your Rating: 4.9</h5>
        </section>
        <JobsContainer jobs={availableJobsList} currentUser={userId} />
      </main>
    </section>
  );
}

export default App;
