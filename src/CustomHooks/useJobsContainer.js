import React, {useEffect} from 'react'

function useJobsContainer(props) {
  const jobsSortedByTime = props.reduce((acc, job) => {
    if(!acc[job.time]) {
      acc[job.time] = []
    }
      acc[job.time].push(job)
    return acc
  }, {})



  return jobsSortedByTime
}

export default useJobsContainer
