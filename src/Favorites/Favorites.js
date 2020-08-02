import React from 'react'
import Job from '../Job/Job'
import { Link } from 'react-router-dom'


function Favorites(props) {
  const {favoriteJobs} = props

  const allFavoritedJobs = favoriteJobs.length > 0 && favoriteJobs.map(job => (
    <Link
        to={`/${job.businessName}`}
        aria-label="current-job"
        data-testid={job.time}
        key={job.time}
        style={{ textDecoration: 'none' }}
        onClick={() => props.setCurrentJob(job)}
      >
        <Job key={job.time} job={job} id={job.employeeId} />
      </Link>
    )
  )

  return (
    <section data-testid="completed-jobs-container" className="completed-jobs-container">
      { allFavoritedJobs }
    </section>
  )
}

export default Favorites
