import React, {useEffect} from 'react'
import useJobsContainer from '../CustomHooks/useJobsContainer'

function JobsContainer(props) {
  const { jobs } = props
  const jobsSortedByTime = useJobsContainer(jobs)
  // console.log(jobsSortedByTime);
  return (
    <section data-testid="user-jobs" >
      <h3>5:00</h3>
      <h3>6:00</h3>
      <h3>7:00</h3>
      <h3>8:00</h3>
      <h3>9:00</h3>
      <h3>10:00</h3>
      <h3>11:00</h3>
      <h3>12:00</h3>
      <h3>1:00</h3>
      <h3>2:00</h3>
      <h3>3:00</h3>
      <h3>4:00</h3>
      <h3>5:00</h3>
    </section>
  )
}

export default JobsContainer
