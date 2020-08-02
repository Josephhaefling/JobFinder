import React from 'react'
import stink from '../assets/stinkyBaby.png'
import './Options.css';
import { Link } from 'react-router-dom'




function Options() {
  return (
    <section data-testid="options-page" className="options-page">
      <h1 className="options-greeting">What would you like to do today?</h1>
      <img src={stink}  data-testid="user-image" className="user-image"/>
      <Link
          to={'/Completed-Jobs'}
          aria-label="options-page"
          data-testid="options-page"
          style={{ textDecoration: 'none' }}
      >
          <button className="option-btn">Completed Jobs</button>
      </Link>
      <Link
          to={'/Make-Schedule'}
          aria-label="options-page"
          data-testid="options-page"
          style={{ textDecoration: 'none' }}
      >
          <button className="option-btn">Make Schedule</button>
      </Link>
      <Link
          to={'/Favorite-Jobs'}
          aria-label="options-page"
          data-testid="options-page"
          style={{ textDecoration: 'none' }}
      >
      <button className="option-btn">Favorite Jobs</button>
      </Link>
    </section>
  )
}

export default Options
