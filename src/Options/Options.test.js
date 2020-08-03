import React from 'react'
import Options from './Options'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';


describe('Options', () => {

  let optionsElement

  beforeEach(() => {

    optionsElement = (
      <MemoryRouter>
        <Options />
      </MemoryRouter>
    )
  })

  it('should render the options page', () => {
    const { getByTestId, getByText } = render(optionsElement)

    const optionsPage = getByTestId('options-page')
    const greeting = getByText('What would you like to do today?')
    const completedJobsLink = getByTestId('completed-jobs-link')
    const makeScheduleLink = getByTestId('make-schedule-link')
    const favoriteJobsLink = getByTestId('favorite-jobs-link')
    const completedJobsBtn = getByText('Completed Jobs')
    const makeScheduleBtn = getByText('Make Schedule')
    const favoriteJobsBtn = getByText('Favorite Jobs')

    expect(optionsPage).toBeInTheDocument()
    expect(greeting).toBeInTheDocument()
    expect(completedJobsBtn).toBeInTheDocument()
    expect(makeScheduleBtn).toBeInTheDocument()
    expect(favoriteJobsBtn).toBeInTheDocument()
    expect(favoriteJobsLink).toBeInTheDocument()
    expect(makeScheduleLink).toBeInTheDocument()
    expect(favoriteJobsLink).toBeInTheDocument()
  })

  it('should change to the route path of /Completed-Jobs when the completed jobs button is clicked', async () => {
    const testHistoryObject = createMemoryHistory()
    const { getByTestId } = render(
      <Router history={testHistoryObject}>
        <Options />
      </Router>
    )

    expect(testHistoryObject.location.pathname).toEqual('/')

    const completedJobsLink = getByTestId('completed-jobs-link')

    fireEvent.click(completedJobsLink)

    expect(testHistoryObject.location.pathname).toEqual('/Completed-Jobs')
  })

  it('should change to the route path of /Favorite-Jobs when the favorite jobs button is clicked', async () => {
    const testHistoryObject = createMemoryHistory()
    const { getByTestId } = render(
      <Router history={testHistoryObject}>
        <Options />
      </Router>
    )

    expect(testHistoryObject.location.pathname).toEqual('/')

    const favoriteJobsLink = getByTestId('favorite-jobs-link')

    fireEvent.click(favoriteJobsLink)

    expect(testHistoryObject.location.pathname).toEqual('/Favorite-Jobs')
  })
})
