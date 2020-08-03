import React from 'react'
import App from './App'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('App', () => {

  let appElement

  beforeEach(() => {
    appElement = (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('should render the App component', ()=> {

    const { getByTestId } = render(appElement)

    const app = getByTestId('App')
    const navBar = getByTestId('nav-bar')
    const mainHeader = getByTestId('main-header')
    const mainPage = getByTestId('main-page')
    const userInfoSection = getByTestId('user-info-section')
    const userGreeting = getByTestId('user-greeting')

    expect(app).toBeInTheDocument()
    expect(navBar).toBeInTheDocument()
    expect(mainHeader).toBeInTheDocument()
    expect(mainPage).toBeInTheDocument()
    expect(userInfoSection).toBeInTheDocument()
    expect(userGreeting).toBeInTheDocument()

  })
})
