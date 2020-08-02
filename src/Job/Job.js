import React from 'react'
import { Switch, Route, withRouter, Link } from 'react-router-dom'
import './Job.css';

function Job(props) {
  // const { setFavoriteJobs, favoriteJobs, removeFromFavorites } = props
  const { businessName, time, bathroomInfo, breakroomInfo, cost, employeeId } = props.job
  const { street, city, state, postcode } =props.job.location

  const job = (
    <section data-testid="job-container" className="job-container">
    <h1>{employeeId}</h1>
      <h1 data-testid="job-time" className="job-time">{time}</h1>
      <h2 data-testid="business-name" className="business-name">{businessName}</h2>
      <section data-testid="address-container" className="address-container">
        <h3 data-testid="street-address" className="street-address">{street.number} {street.name}</h3>
        <h3 data-testid="city" className="city">{city}, {state} {postcode}</h3>
      </section>
      <section data-testid="job-description-container" className="job-description-container">
        <p data-testid="bathroom-info" className="bathroom-info">{bathroomInfo.numBathrooms} bathrooms with {bathroomInfo.toiletsPerBathroom} toilets</p>
        <p data-testid="breakroom-info" className="breakroom-info">{breakroomInfo} breakroom</p>
        </section>
        <h2 data-testid="job-pay" className="job-pay">${cost}</h2>

     </section>
  )

return (
  <section data-testid="job" className="job">
    {job}
  </section>

  )
}
export default Job
