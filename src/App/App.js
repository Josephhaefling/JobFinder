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
import CompletedJobs from '../CompletedJobs/CompletedJobs'
import Favorites from '../Favorites/Favorites'



function App() {
  const [ availableJobsList, setAvailableJobsList ] = useState([])
  const [ currentJob, setCurrentJob ] = useState({})
  const [ completedJobs, setCompletedJobs ] = useState([])
  const [ currentBusinessList, setBusinessList ] = useState([])
  const [currentUsersJobs, setCurrentUsersJobs] = useState([])
  const [ endTime, setEndTime ] = useState('')
  const [ favoriteJobs, setFavoriteJobs ] = useState([])
  const [ isOnHomePage, setIsOnHomePage ] = useState(true)
  const [ jobIsComplete, setJobIsComplete ] = useState(false)
  const [ jobIsStarted, setJobIsStarted ] = useState(false)
  const [ startTime, setStartTime ] = useState('')
  const [ userId, setUseId ] = useState(3)
  const { businessList, availableJobs } = useApp(availableJobsList) || {businessList: currentBusinessList, availableJobs: availableJobsList}
  const findJob = (jobId) => {
    return favoriteJobs.find(job => job.jobId === jobId)
  }
  const removeFromFavorites = (event) => {
    const removeId = event.target.name
    const jobToRemove = findJob(removeId)
    const newFavsArray = favoriteJobs.filter(job => job.jobId !== jobToRemove.jobId)
    setFavoriteJobs(newFavsArray)

  }
  const mainPage = (
    <section data-testid="App" className="App">
      <main data-testid="main-page" className="main-page">
        <section data-testid="user-info-section" className="userInfo-section">
          <h3 data-testid="user-greeting" className="user-greeting">Welcome Back, Michael!</h3>
        </section>
        <JobsContainer
          currentUser={ userId }
          currentUsersJobs={ currentUsersJobs }
          favoriteJobs={ favoriteJobs }
          findJob={ findJob }
          jobs={ availableJobsList }
          removeFromFavorites={ removeFromFavorites }
          setCurrentJob={ setCurrentJob }
          setCurrentUsersJobs={setCurrentUsersJobs}
          setFavoriteJobs={ setFavoriteJobs }
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
      exact path="/Favorite-Jobs"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <section>
            <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } />
            <Favorites favoriteJobs={ favoriteJobs }/>
          </section>
        )
      }}
    />

    <Route
      exact path="/Completed-Jobs"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <section>
            <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } />
            <CompletedJobs completedJobs={ completedJobs }/>
          </section>
        )
      }}
    />
    <Route
      exact path="/Options"
      render={(routeProps) => {
        const { params } = routeProps.match
        const { id } = params
        return (
          <section>
            <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } />
            <Options />
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
          <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } />
          <RateBusiness
            availableJobsList={ availableJobsList }
            completedJobs={ completedJobs }
            currentJob={ currentJob }
            favoriteJobs={ favoriteJobs }
            setAvailableJobs={ setAvailableJobsList }
            setCompletedJobs={ setCompletedJobs }
            setCurrentJob={ setCurrentJob }
            setFavoriteJobs={ setFavoriteJobs }
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
          <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } />
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
            setStartTime={ setStartTime }
          />
          </section>
        )
      }}
    />
      <Route exact path="/" render={() => {
        return (
        <section>
          <Header isOnHomePage={ isOnHomePage } setIsOnHomePage={ setIsOnHomePage } />
          {mainPage}
        </section>
      )

      }} />
    </Switch>
  );
}

export default App;
