import React, {useEffect} from 'react'
import useJobsContainer from '../CustomHooks/useJobsContainer'
import Job from '../Job/Job'
import './JobsContainer.css';


function JobsContainer(props) {
  const { jobs, currentUser } = props
  const jobsList = useJobsContainer(jobs, currentUser)

  const todaysJobs = jobsList && jobsList.map(job => <Job key={job.time} job={job} />)

  return (
    <section data-testid="user-jobs" className="user-jobs" >
      {todaysJobs}

    </section>
  )
}

export default JobsContainer
