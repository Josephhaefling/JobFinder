import React, {useEffect} from 'react'
import useJobsContainer from '../CustomHooks/useJobsContainer'
import { Link } from 'react-router-dom'
import Job from '../Job/Job'
import './JobsContainer.css';


function JobsContainer(props) {
  const { jobs, currentUser } = props
  console.log(jobs);
  const jobsList = useJobsContainer(jobs, currentUser)

  const todaysJobs = jobsList && jobsList.map(job => (
    <Link
        to={`/${job.businessName}`}
        aria-label="current-job"
        data-testid={job.time}
        key={job.time}
        style={{ textDecoration: 'none' }}
        onClick={() => props.setCurrentJob(job)}
      >
        <Job key={job.time} job={job} />
      </Link>
    )
  )
  console.log('JobsContainer rerender');
  return (
    <section data-testid="user-jobs" className="user-jobs" >
      {todaysJobs}

    </section>
  )
}

export default JobsContainer
