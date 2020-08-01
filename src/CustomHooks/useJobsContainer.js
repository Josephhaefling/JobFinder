import React, {useEffect} from 'react'

function useJobsContainer(jobsList, userId) {
  const jobsSortedByTime = (allJobsSortedByUser) => {
    const sortedJobsKeys = Object.keys(allJobsSortedByUser)
    return sortedJobsKeys.map(key => sortJobsByTime(allJobsSortedByUser[key]))
  }
  console.log(jobsList);

  const sortJobsByTime = (userJobs) => {
    const matches = []
    const sortedJobs = userJobs.sort((a, b) => {
      if(parseInt(a.time) - parseInt(b.time) === 0) {
        matches.push(userJobs.indexOf(b))
      }
      return a.time - b.time
    })
      matches.forEach(match => userJobs.splice(match, 1))
    return userJobs
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

    const getASpecificUsersJobs = (allUsersJobs, user) => {
      return allUsersJobs[user]
    }

    const allJobsSortedByUser = jobsSortedByUser()
    console.log(allJobsSortedByUser);
    const allUsersJobs = jobsSortedByTime(allJobsSortedByUser)
    const currentUsersJobs = getASpecificUsersJobs(allUsersJobs, userId)


  return currentUsersJobs
}
export default useJobsContainer
