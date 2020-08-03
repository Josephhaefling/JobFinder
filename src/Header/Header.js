import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


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
          <button
          onClick={() => setIsOnHomePage(!isOnHomePage)}
          >Options</button>
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
          <button onClick={() => setIsOnHomePage(!isOnHomePage)}>Home</button>
        </Link>
      )
    }
  }

  useEffect(() => {
    createButton()
  })

  return(
    <section data-testid="header-section">
      <nav data-testid="nav-bar" className="nav-bar">
        <h1 data-testid="main-header" className="main-header" >Nine2Five</h1>
        { createButton() }
      </nav>
    </section>
  )
}

export default Header
