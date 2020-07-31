import React, {useEffect} from 'react'
import useJobsContainer from '../CustomHooks/useJobsContainer'
import Job from '../Job/Job'

function JobsContainer(props) {
  const { jobs, currentUser } = props
  const jobsList = useJobsContainer(jobs, currentUser)
  return (
    <section data-testid="user-jobs" >
      <section data-testid="0500">
        <h3>5:00 A.M.</h3>
        <Job />
      </section>
      <section data-testid="0600">
        <h3>6:00 A.M.</h3>
      </section>
      <section data-testid="0700">
        <h3>7:00 A.M.</h3>
      </section>
      <section data-testid="0800">
        <h3>8:00 A.M.</h3>
      </section>
      <section data-testid="0900">
        <h3>9:00 A.M.</h3>
      </section>
      <section data-testid="1000">
        <h3>10:00 A.M.</h3>
      </section>
      <section data-testid="1100">
        <h3>11:00 A.M.</h3>
      </section>
      <section data-testid="1200">
        <h3>12:00 P.M.</h3>
      </section>
      <section data-testid="1300">
        <h3>1:00 P.M.</h3>
      </section>
      <section data-testid="1400">
        <h3>2:00 P.M.</h3>
      </section>
      <section data-testid="1500">
        <h3>3:00 P.M.</h3>
      </section>
      <section data-testid="1600">
        <h3>4:00 P.M.</h3>
      </section>
      <section data-testid="1700">
        <h3>5:00 P.M.</h3>
      </section>
    </section>
  )
}

export default JobsContainer
