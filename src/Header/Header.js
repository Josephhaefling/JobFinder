import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return(
    <section>
      <nav data-testid="nav-bar" className="nav-bar">
        <h1 data-testid="main-header" className="main-header" >Nine2Five</h1>
        <Link
            to={'/Options'}
            aria-label="options-page"
            data-testid="options-page"
            style={{ textDecoration: 'none' }}
            >
            <button>Options</button>
            </Link>
            </nav>
    </section>
  )
}

export default Header
