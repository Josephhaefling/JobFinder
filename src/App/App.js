import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import moment from 'moment';
import useApp from '../CustomHooks/useApp'
import JobsContainer from '../JobsContainer/JobsContainer'
import StartJob from '../StartJob/StartJob'
import RateBusiness from '../RateBusiness/RateBusiness'



function App() {
  const { businessList, availableJobs } = useApp()
  const [ availableJobsList, setAvailableJobsList ] = useState([])
  const [ currentJob, setCurrentJob ] = useState({})
  const [ currentBusinessList, setBusinessList ] = useState([])
  const [ endTime, setEndTime ] = useState('')
  const [ jobIsComplete, setJobIsComplete ] = useState(false)
  const [ jobIsStarted, setJobIsStarted ] = useState(false)
  const [ startTime, setStartTime ] = useState('')
  const [ userId, setUseId ] = useState(3)
  const mainPage = (
    <section data-testid="App" className="App">
      <nav data-testid="nav-bar" className="nav-bar">
        <h1 data-testid="main-header" className="main-header" >Nine2Five</h1>
      </nav>
      <main data-testid="main-page" className="mainn-page">
        <section data-testid="user-info-section" className="userInfo-section">
          <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
          <img data-testid="user-image" className="user-image" />
        </section>
        <JobsContainer
          jobs={ availableJobsList }
          currentUser={ userId }
          setCurrentJob={ setCurrentJob }
        />
      </main>
    </section>
  )

  useEffect(() => {
    setBusinessList(businessList)
    setAvailableJobsList(availableJobs)
  })

  return (
    <Switch>
    <Route
      exact path="/RateBusiness"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <RateBusiness
            currentJob={ currentJob }
            setCurrentJob={ setCurrentJob }
            setAvailableJobs={ setAvailableJobsList }
            availableJobsList={ availableJobsList }
          />
        )
      }}
    />
    <Route
      exact path="/:currentJob"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <StartJob
            {...routeProps}
            jobInfo={ currentJob }
            setCurrentJob={ setCurrentJob }
            jobIsStarted={ jobIsStarted }
            setJobIsStarted={ setJobIsStarted }
            setJobIsComplete={ setJobIsComplete }
            setStartTime={ setStartTime }
            setEndTime={ setEndTime }
            avavialbleJobsList={ availableJobsList }
            setAvailableJobsList={ setAvailableJobsList }
          />
        )
      }}
    />
      <Route exact path="/" render={() => mainPage} />
    </Switch>
  );
}

export default App;
