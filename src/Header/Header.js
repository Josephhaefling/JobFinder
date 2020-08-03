import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import stink from '../assets/stinkyBaby.png'
import homeBtn from '../assets/home.png'
import './Header.css';



function Header(props) {
  const { isOnHomePage, setIsOnHomePage } = props

  const createButton = () => {
    if(isOnHomePage === true) {
      return (
        <Link
          to={'/Options'}
          aria-label="options-page"
          data-testid="options-page"
          style={{ textDecoration: 'none' }}
          onClick={() => setIsOnHomePage(!isOnHomePage)}
        >
          <img
          src={stink}
          className="options-btn"
          onClick={() => setIsOnHomePage(!isOnHomePage)}
          />
        </Link>
          )
    } else {
      return (
        <Link
          to={'/'}
          aria-label="back-btn"
          data-testid="back-btn"
          style={{ textDecoration: 'none' }}
        >
          <img 
            src={homeBtn}
            className="home-btn"
            onClick={() => setIsOnHomePage(!isOnHomePage)} />
        </Link>
      )
    }
  }

  useEffect(() => {
    createButton()
  })

  return(
    <section data-testid="header-section" className="header-section">
      <nav data-testid="nav-bar" className="nav-bar">
        <h1 data-testid="main-header" className="main-header" >Nine2Five</h1>
        { createButton() }
      </nav>
    </section>
  )
}

export default Header
