import React from 'react'
import moment from 'moment';
import './StartJob.css';


function StartJob(props) {
  const { businessName, contactPerson, personImage, jobDate, time, bathroomInfo, breakroomInfo, cost } = props.jobInfo
  const { street, city, state, postcode } = props.jobInfo.location
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
        <button data-testid="start-job" className="start-job">Start Job</button>
        <button data-testid="finish-job" className="finish-job">Finish Job</button>
    </section>
  </section>
)
}

export default StartJob
