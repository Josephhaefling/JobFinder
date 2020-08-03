import React, { useEffect } from 'react'

function useJobsContainer(jobsList, userId) {

  const jobsSortedByTime = (allJobsSortedByUser) => {
    const sortedJobsKeys = Object.keys(allJobsSortedByUser)
    return sortedJobsKeys.map(key => sortJobsByTime(allJobsSortedByUser[key]))
  }

  const sortJobsByTime = (userJobs) => {
    const sortedJobs = userJobs.sort((a, b) => {
      const timeA = a.time.split(':')
      const timeB = b.time.split(':')
      return timeA[0] - timeB[0]
    })
    const jobsAsObject = sortedJobs.reduce((acc, job) => {
      if(!acc[job.time]) {
         acc[job.time] = job
      }
      return acc
    },{})
    const jobKeys = Object.keys(jobsAsObject)
    const finalJobsList = jobKeys.map(jobKey => jobsAsObject[jobKey])
    return finalJobsList
  }

    const jobsSortedByUser = () => {
        return jobsList.reduce((acc, job) => {
          if(!acc[job.employeeId]) {
            acc[job.employeeId] = []
          }
          acc[job.employeeId].push(job)
          return acc
        }, {})
    }

    if(jobsList.length === 20 ) {
      const allJobsSortedByUser = jobsSortedByUser()
      const allUsersJobs = jobsSortedByTime(allJobsSortedByUser)
      return allUsersJobs
    } else {
      const allJobsSortedByUser = jobsSortedByUser()
      const allUsersJobs = jobsSortedByTime(allJobsSortedByUser)
      return allUsersJobs
    }


}

export default useJobsContainer
