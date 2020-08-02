import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import moment from 'moment';
import useApp from '../CustomHooks/useApp'
import JobsContainer from '../JobsContainer/JobsContainer'
import StartJob from '../StartJob/StartJob'
import RateBusiness from '../RateBusiness/RateBusiness'
import Options from '../Options/Options'
import Header from '../Header/Header'



function App() {
  const [ availableJobsList, setAvailableJobsList ] = useState([])
  const [ currentJob, setCurrentJob ] = useState({})
  const [ currentBusinessList, setBusinessList ] = useState([])
  const [currentUsersJobs, setCurrentUsersJobs] = useState([])
  const [ endTime, setEndTime ] = useState('')
  const [ jobIsComplete, setJobIsComplete ] = useState(false)
  const [ jobIsStarted, setJobIsStarted ] = useState(false)
  const [ startTime, setStartTime ] = useState('')
  const [ userId, setUseId ] = useState(3)
  const { businessList, availableJobs } = useApp(availableJobsList) || {businessList: currentBusinessList, availableJobs: availableJobsList}
  const mainPage = (
    <section data-testid="App" className="App">
      <main data-testid="main-page" className="mainn-page">
        <section data-testid="user-info-section" className="userInfo-section">
          <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
          <img data-testid="user-image" className="user-image" />
        </section>
        <JobsContainer
          jobs={ availableJobsList }
          currentUser={ userId }
          currentUsersJobs={ currentUsersJobs }
          setCurrentJob={ setCurrentJob }
          setCurrentUsersJobs={setCurrentUsersJobs}
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
      exact path="/Options"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <section>
            <Header />
            <Options
          />
          </section>
        )
      }}
    />
    <Route
      exact path="/RateBusiness"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <section>
          <Header />
          <RateBusiness
            currentJob={ currentJob }
            setCurrentJob={ setCurrentJob }
            setAvailableJobs={ setAvailableJobsList }
            availableJobsList={ availableJobsList }
          />
          </section>
        )
      }}
    />
    <Route
      exact path="/:currentJob"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <section>
          <Header />
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
          </section>
        )
      }}
    />
      <Route exact path="/" render={() => {
        return (
        <section>
          <Header />
          {mainPage}
        </section>
      )

      }} />
    </Switch>
  );
}

export default App;
