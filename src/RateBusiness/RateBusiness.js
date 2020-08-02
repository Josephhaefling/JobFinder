import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './RateBusiness.css';


function RateBusiness(props) {
  const { availableJobsList, setAvailableJobs, setCurrentJob } = props
  const { businessName, employeeId, jobId } = props.currentJob
  const [ doJobAgain, setDoJobAgain ] = useState(false)
  const [ askedToDoExtraWork, setAskedToDoExtraWork ] = useState(false)
  const [ staffWasRespectful, setStaffWasRespectful ] = useState(0)
  const [ jobWasEasyToFind, setJobWasEasyToFind ] = useState(0)
  const [ contactWasPresent, setContactWasPresent ] = useState(false)
  const [ changedTrash, setChangedTrash ] = useState(null)
  const [ changedToiletPaper, setChangedToiletPaper ] = useState(null)
  const [ refilledHandSoap, setRefilledHandSoap ] = useState(null)
  const [ refilledPaperTowls, setRefilledPaperTowls ] = useState(null)
  const [ cleanedToilets, setCleanedToilets ] = useState(null)
  const [ cleanedSinks, setCleanedSinks ] = useState(null)
  const [ contactPresent, setContactPresent ] = useState(null)
  const [ wouldYouDoJobAgain, setWouldYouDoJobAgain ] = useState(null)
  const [ wasStaffRespectful, setWasStaffRespectful ] = useState(null)
  const [ easyToFind, setEasyToFind ] = useState(null)
  const jobToRemove = availableJobsList && availableJobsList.find(availableJob => availableJob && availableJob.jobId === jobId)
  const newJobsList = availableJobsList.filter(availableJob => availableJob && availableJob.jobId !== jobToRemove.jobId)

return (
  <form data-testid="rate-business-form">
  <h1 class="name-of-business">{businessName}</h1>
  <p className="rate-business-questions">
  Did you change the trash?</p>
  <section className="question-container">
  <label className="rate-business-btn">
    <input
      type="radio"
      checked={changedTrash === true}
      value='Yes'
      onChange={(event) => setChangedTrash(true)}
    />
    Yes
  </label>
  <label className="rate-business-btn">
    <input
    type="radio"
    checked={changedTrash === false}
    value='No'
    onChange={(event) => setChangedTrash(false)}/>
    No
  </label>
  </section>
  <p className="rate-business-questions">
  Did you refill the toilet paper?</p>
  <section className="question-container">
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={changedToiletPaper === true}
    value='Yes'
    onChange={(event) => setChangedToiletPaper(true)}
  />
    Yes
  </label>
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={changedToiletPaper === false}
    value='No'
    onChange={(event) => setChangedToiletPaper(false)}
  />
    No
  </label>
  </section>
  <p className="rate-business-questions">
  Did you refill the hand soap?</p>
  <section className="question-container">
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={refilledHandSoap === true}
    value='Yes'
    onChange={(event) => setRefilledHandSoap(true)}
  />
    Yes
  </label>
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={refilledHandSoap === false}
    value='No'
    onChange={(event) => setRefilledHandSoap(false)}
  />
    No
  </label>
  </section>
  <p className="rate-business-questions">
  Did you refill the paper towels?</p>
  <section className="question-container">
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={refilledPaperTowls === true}
    value='Yes'
    onChange={(event) => setRefilledPaperTowls(true)}
  />
    Yes
  </label>
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={refilledPaperTowls === false}
    value='No'
    onChange={(event) => setRefilledPaperTowls(false)}
  />
    No
  </label>
  </section>
  <p className="rate-business-questions">
  Did you clean all of the toilets?</p>
  <section className="question-container">
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={cleanedToilets === true}
    value='Yes'
    onChange={(event) => setCleanedToilets(true)}
  />
    Yes
  </label>
  <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={cleanedToilets === false}
    value='No'
    onChange={(event) => setCleanedToilets(false)}
  />
    No
  </label>
  </section>
  <p className="rate-business-questions">
  Did you clean all of the sinks?</p>
  <section className="question-container">
  <label className="rate-business-btn">
    <input
    type="radio"
    className="rate-business-questions"
    checked={cleanedSinks === true}
    value='Yes'
    onChange={(event) => setCleanedSinks(true)}
  />
    Yes
  </label>
  <label className="rate-business-btn">
    <input
    type="radio"
    className="rate-business-questions"
    checked={cleanedSinks === false}
    value='No'
    onChange={(event) => setCleanedSinks(false)}
  />
    No
  </label>
  </section>
  <p className="rate-business-questions">
  Was job easy to find?</p>
  <section className="question-container">
  <label className="rate-business-btn">
  <input
  className="rate-business-questions"
  type="radio"
  checked={easyToFind === 1}
  value='1'
  onChange={(event) => setEasyToFind(1)}
  />
    1
  </label>
  <label className="rate-business-btn">
  <input
  className="rate-business-questions"
  type="radio"
  checked={easyToFind === 2}
  value='2'
  onChange={(event) => setEasyToFind(2)}
  />    2
  </label>
  <label className="rate-business-btn">
  <input
  className="rate-business-questions"
  type="radio"
  checked={easyToFind === 3}
  value='3'
  onChange={(event) => setEasyToFind(3)}
  />    3
  </label>
  <label className="rate-business-btn">
  <input
  className="rate-business-questions"
  type="radio"
  checked={easyToFind === 4}
  value='4'
  onChange={(event) => setEasyToFind(4)}
  />    4
  </label>
  <label className="rate-business-btn">
  <input
  className="rate-business-questions"
  type="radio"
  checked={easyToFind === 5}
  value='5'
  onChange={(event) => setEasyToFind(5)}
  />    5
  </label>
  </section>
  <p className="rate-business-questions">
  Was staff respectful?</p>
  <section className="question-container">
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={staffWasRespectful === 1}
    value='1'
    onChange={(event) => setStaffWasRespectful(1)}
    />      1

    </label>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={staffWasRespectful === 2}
    value='2'
    onChange={(event) => setStaffWasRespectful(2)}
    />      2

    </label>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={staffWasRespectful === 3}
    value='3'
    onChange={(event) => setStaffWasRespectful(3)}
    />      3

    </label>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={staffWasRespectful === 4}
    value='4'
    onChange={(event) => setStaffWasRespectful(4)}
    />      4

    </label>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={staffWasRespectful === 5}
    value='5'
    onChange={(event) => setStaffWasRespectful(5)}
    />      5
    </label>
    </section>
    <p className="rate-business-questions">
    Was contact person present?</p>
    <section>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={contactPresent === true}
    value='Yes'
    onChange={(event) => setContactPresent(true)}
    />
    Yes
    </label>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={contactPresent === false}
    value='No'
    onChange={(event) => setContactPresent(false)}
    />
    No
    </label>
    </section>
    <p className="rate-business-questions">
      Would you like to do this job again?</p>
      <section className="question-container">
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={wouldYouDoJobAgain === true}
    value='Yes'
    onChange={(event) => setWouldYouDoJobAgain(true)}
    />
    Yes
    </label>
    <label className="rate-business-btn">
    <input
    className="rate-business-questions"
    type="radio"
    checked={wouldYouDoJobAgain === false}
    value='No'
    onChange={(event) => setWouldYouDoJobAgain(false)}
    />
    No
    </label>
    </section>

    <Link
        to={'/'}
        aria-label="submit rating btn"
        data-testid="submit-link"
        style={{ textDecoration: 'none' }}
      >
        <button
          data-testid="submit-btn"
          className="submit-business-rating"
          onClick={() => {
            setCurrentJob('')
            setAvailableJobs(newJobsList)}
          }
        >Submit</button>
      </Link>
  </form>
)
}

export default RateBusiness
