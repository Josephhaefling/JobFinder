import React, {useEffect} from 'react'
import useJobsContainer from '../CustomHooks/useJobsContainer'
import { Link } from 'react-router-dom'
import Job from '../Job/Job'
import './JobsContainer.css'
import favorited from '../assets/favorited.png'
import notFavorited from '../assets/notFavorited.png'



function JobsContainer(props) {


  const { jobs, currentUser, setCurrentUsersJobs, currentUsersJobs, setFavoriteJobs, favoriteJobs, removeFromFavorites, findJob } = props
  const jobsList = useJobsContainer(jobs, currentUser)
  const getAllSpecificUsersJobs = (jobList) => {
    const user = currentUser
    return jobsList[currentUser - 1]
  }
  const jobsForCurrentUser = getAllSpecificUsersJobs(currentUser)
  const getFavoritedJob = (jobToFind) => {
    const favorite = <img src={favorited} name={jobToFind.jobId} className="fav-btn" onClick={(event) => removeFromFavorites(event)}/>
    const notAFavorite = <img src={notFavorited} className="fav-btn" onClick={() => setFavoriteJobs([...favoriteJobs, jobToFind])} />
    const favoriteJob = findJob(jobToFind.jobId)
    if(favoriteJob) {
      return favorite
    } else {
      return notAFavorite
    }
  }



  const todaysJobs = jobsForCurrentUser && jobsForCurrentUser.map(job => {
    const favButton = getFavoritedJob(job)
    return (
    <section className="jobs-container">
    <Link
        to={`/${job.businessName}`}
        aria-label="current-job"
        className="current-job-link"
        data-testid={job.time}
        key={job.time}
        style={{ textDecoration: 'none' }}
        onClick={() => props.setCurrentJob(job)}
      >
        <Job
          key={job.time}
          job={job}
          id={job.employeeId}
          favoriteJobs={ favoriteJobs }
          setFavoriteJobs={ setFavoriteJobs }
          removeFromFavorites={ removeFromFavorites }
        />
      </Link>
      {favButton}
      </section>
    )
  }
  )

  return (
    <section data-testid="user-jobs" className="user-jobs" >
      { todaysJobs }
    </section>
  )
}

export default JobsContainer
