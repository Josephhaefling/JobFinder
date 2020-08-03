import React from 'react'
import Header from './Header'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';

describe('Header', () => {

  let headerElement1
  let headerElement2
  let isOnHomePage1
  let isOnHomePage2
  let setIsOnHomePage

  beforeEach(() => {
    isOnHomePage1 = true
    isOnHomePage2 = false
    setIsOnHomePage = jest.fn().mockImplementation(() => {})

    headerElement1 = (
      <MemoryRouter>
        <Header isOnHomePage={ isOnHomePage1 } setIsOnHomePage={ setIsOnHomePage } />
      </MemoryRouter>
    )
    headerElement2 = (
      <MemoryRouter>
        <Header isOnHomePage={ isOnHomePage2 } setIsOnHomePage={ setIsOnHomePage } />
      </MemoryRouter>
    )
  })


  it('should render the header and options button', () => {

    const { getByTestId } = render(headerElement1)

    const headerSection = getByTestId('header-section')
    const optionsLink = getByTestId('options-page')

    expect(headerSection).toBeInTheDocument()
    expect(optionsLink).toBeInTheDocument()
  })

  it('should render the header and home button', () => {

    const { getByTestId } = render(headerElement2)

    const headerSection = getByTestId('header-section')
    const backbtn = getByTestId('back-btn')

    expect(headerSection).toBeInTheDocument()
    expect(backbtn).toBeInTheDocument()
  })

  it('should change to the route path of /Options when the options button is clicked', async () => {
    const testHistoryObject = createMemoryHistory()

    const { getByTestId } = render(
      <Router history={testHistoryObject}>
        <Header isOnHomePage={ isOnHomePage1 } setIsOnHomePage={ setIsOnHomePage } />
      </Router>
    )

    expect(testHistoryObject.location.pathname).toEqual('/')

    const optionsBtn = getByTestId('options-page')

    fireEvent.click(optionsBtn)

    expect(testHistoryObject.location.pathname).toEqual('/Options')
  })

  it('should change to the route path of /Home when the options button is clicked', async () => {
    const testHistoryObject = createMemoryHistory()
    testHistoryObject.push('/Options')

    const { getByTestId } = render(
      <Router history={testHistoryObject}>
        <Header isOnHomePage={ isOnHomePage2 } setIsOnHomePage={ setIsOnHomePage } />
      </Router>
    )

    expect(testHistoryObject.location.pathname).toEqual('/Options')

    const backBtn = getByTestId('back-btn')

    fireEvent.click(backBtn)

    expect(testHistoryObject.location.pathname).toEqual('/')
  })
})
