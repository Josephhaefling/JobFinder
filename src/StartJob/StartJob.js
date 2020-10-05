import React from 'react'
import moment from 'moment';
import './StartJob.css';
import finishJob from '../assets/finish-flag.png'
import notStarted from '../assets/stopwatch.png'
import started from '../assets/timerStarted.png'
import { Link } from 'react-router-dom'



function StartJob(props) {
  const { setCurrentJob, setAvailableJobsList, availableJobsList, setStartTime, setEndTime, startTime, setJobIsStarted, jobIsStarted } = props
  const { businessName, contactPerson, personImage, jobDate, time, bathroomInfo, breakroomInfo, cost } = props.jobInfo
  const { street, city, state, postcode } = props.jobInfo.location

  const determineIfJobIsStarted = (buttonClicked) => {
    if(!jobIsStarted) {
      buttonClicked.preventDefault()
    }
  }

return (
  <section data-testid="start-job-page" className="start-job-page">
    <h1 data-testid="contact-person" className="contact-person">Contact: {contactPerson.first} {contactPerson.last}</h1>
    <img data-testid="contact-image" className="contact-image" src={personImage.large}/>
    <h1 data-testid="business-name" className="business-name" >{businessName}</h1>
    <section data-testid="address-container" className="address-container">
      <h3 data-testid="street-address" className="street-address">{street.number} {street.name}</h3>
      <h3 data-testid="city" className="city">{city}, {state} {postcode}</h3>
      <section data-testid="job-description-container" className="job-description-container">
        <p data-testid="bathroom-info" className="bathroom-info">{bathroomInfo.numBathrooms} bathrooms with {bathroomInfo.toiletsPerBathroom} toilets</p>
        <p data-testid="breakroom-info" className="breakroom-info">{breakroomInfo} breakroom</p>
        </section>
        <h2 data-testid="job-pay" className="job-pay">${cost}</h2>
        <section className="buttons-container">
        <img 
          src={notStarted} 
          data-testid="start-job" 
          disabled={jobIsStarted}
          className="start-job-btn" 
          onClick={(e) => {
            e.target.src = started
            setStartTime(moment().format("hh:mm:ss a"))
            setJobIsStarted(true)
        }} />
        <Link
            to={'/RateBusiness'}
            aria-label="submit rating btn"
            data-testid="submit-rating-btn"
            onClick={(e) => determineIfJobIsStarted(e)}
            style={{ textDecoration: 'none' }}
            disabled={jobIsStarted}
          >
          <img
            src={finishJob}
            data-testid="finish-job"
            className="finish-job"
            onClick={() => setEndTime(moment().format("hh:mm:ss a"))}
            />
          </Link>
      </section>
    </section>
  </section>
)
}

export default StartJob
