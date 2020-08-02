import React from 'react'
import Options from './Options'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

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
    const completedJobsBtn = getByText('Completed Jobs')
    const makeScheduleBtn = getByText('Make Schedule')
    const favoriteJobsBtn = getByText('Favorite Jobs')

    expect(optionsPage).toBeInTheDocument()
    expect(greeting).toBeInTheDocument()
    expect(completedJobsBtn).toBeInTheDocument()
    expect(makeScheduleBtn).toBeInTheDocument()
    expect(favoriteJobsBtn).toBeInTheDocument()
  })
})
