import React from 'react'
import Job from '../Job/Job'
import './CompletedJobs.css';
import { Link } from 'react-router-dom'
import './CompletedJobs.css';



function CompletedJobs(props) {
  const { completedJobs } = props

  const obs = completedJobs && completedJobs.map(job => console.log(job.time))

  console.log(completedJobs);


  const allCompletedJobs = completedJobs.length > 0 && completedJobs.map(job => (
      <section className="jobs-container">
        <Link
            to={`/${job.businessName}`}
            aria-label="current-job"
            className="completed-links"
            data-testid={job.time}
            key={job.time}
            style={{ textDecoration: 'none' }}
            onClick={() => props.setCurrentJob(job)}
          >
            <Job key={job.time} job={job} id={job.employeeId} />
          </Link>
      </section>
    )
  )

  return (
    <section data-testid="completed-jobs-container" className="completed-jobs-container">
      { allCompletedJobs }
    </section>
  )
}

export default CompletedJobs
