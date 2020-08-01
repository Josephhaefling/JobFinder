import React, { useState, useEffect } from 'react'

function RateBusiness(props) {

  const [ doJobAgain, setDoJobAgain ] = useState(false)
  const [ askedToDoExtraWork, setAskedToDoExtraWork ] = useState(false)
  const [ staffWasRespectful, setStaffWasRespectful ] = useState(0)
  const [ jobWasEasyToFind, setJobWasEasyToFind ] = useState(0)
  const [ contactWasPresent, setContactWasPresent ] = useState(false)

return (
  <form>
  <p>Did you change the trash?</p>
  <label>
    <input
      type="radio"
      name="do-job-again"
      value='Yes'
    />
    Yes
  </label>
  <label>
    <input type="radio" name="do-job-again" value='No' />
    No
  </label>
  <p>Did you refill the toilet paper?</p>
  <label>
    <input type="radio" name="do-job-again" value='Yes' />
    Yes
  </label>
  <label>
    <input type="radio" name="do-job-again" value='No' />
    No
  </label>
  <p>Did you refill the soap dispenser?</p>
  <label>
    <input type="radio" name="do-job-again" value='Yes' />
    Yes
  </label>
  <label>
    <input type="radio" name="do-job-again" value='No' />
    No
  </label>
  <p>Did you refill the paper towls?</p>
  <label>
    <input type="radio" name="do-job-again" value='Yes' />
    Yes
  </label>
  <label>
    <input type="radio" name="do-job-again" value='No' />
    No
  </label>
  <p>Did you clean all of the toilets?</p>
  <label>
    <input type="radio" name="do-job-again" value='Yes' />
    Yes
  </label>
  <label>
    <input type="radio" name="do-job-again" value='No' />
    No
  </label>
  <p>Did you clean all of the sinks?</p>
  <label>
    <input type="radio" name="do-job-again" value='Yes' />
    Yes
  </label>
  <label>
    <input type="radio" name="do-job-again" value='No' />
    No
  </label>
  <p>Was job easy to find?</p>
  <label>
    <input type="radio" name="easy-to-find" value='one' />
    1
  </label>
  <label>
    <input type="radio" name="easy-to-find" value='two' />
    2
  </label>
  <label>
    <input type="radio" name="easy-to-find" value='three' />
    3
  </label>
  <label>
    <input type="radio" name="easy-to-find" value='four' />
    4
  </label>
  <label>
    <input type="radio" name="easy-to-find" value='five' />
    5
  </label>
    <p>Was staff respectful?</p>
    <label>
      <input type="radio" name="staff-was-respectful" value='one' />
      1
    </label>
    <label>
      <input type="radio" name="staff-was-respectful" value='two' />
      2
    </label>
    <label>
      <input type="radio" name="staff-was-respectful" value='three' />
      3
    </label>
    <label>
      <input type="radio" name="staff-was-respectful" value='four' />
      4
    </label>
    <label>
      <input type="radio" name="staff-was-respectful" value='five' />
      5
    </label>
    <p>Where you able to locate the contact person?</p>
    <label>
      <input type="radio" name="do-job-again" value='Yes' />
      Yes
    </label>
    <label>
      <input type="radio" name="do-job-again" value='No' />
      No
    </label>
    <p>Would you do this job again?</p>
    <label>
      <input type="radio" name="do-job-again" value='Yes' />
      Yes
    </label>
    <label>
      <input type="radio" name="do-job-again" value='No' />
      No
    </label>
  </form>
)
}

export default RateBusiness
