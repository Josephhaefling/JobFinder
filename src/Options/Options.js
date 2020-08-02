import React from 'react'
import stink from '../assets/stinkyBaby.png'
import './Options.css';



function Options() {
  return (
    <section data-testid="options-page" className="options-page">
      <h1 className="options-greeting">What would you like to do today?</h1>
      <img src={stink}  data-testid="user-image" className="user-image"/>
      <button className="option-btn">Completed Jobs</button>
      <button className="option-btn">Make Schedule</button>
      <button className="option-btn">Favorite Jobs</button>
    </section>
  )
}

export default Options
