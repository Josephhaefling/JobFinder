import React from 'react'
import CompletedJobs from './CompletedJobs'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('CompletedJobs', () => {

  let completedJobs
  let completedJobsElement

  beforeEach(() => {
    completedJobs = ([
      {
        bathroomInfo: {numBathrooms: 2, toiletsPerBathroom: 1, sinksPerBathroom: 1},
          breakroomInfo: 1,
          businessName: "Some Bank",
          contactPerson: {title: "Mr", first: "Norman", last: "Mills"},
          cost: 16,
          employeeId: 4,
          jobDate: "07/31/2020",
          jobId: 1596216852751,
          location: {street: {number: 7913, name: "York St"}, city: "Denver", state: "CO", country: "US", postcode: 80202},
          personImage: {large: "https://randomuser.me/api/portraits/women/32.jpg", medium: "https://randomuser.me/api/portraits/med/women/32.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"},
          phone: "(507)-308-3728",
          time: "0900"
        }
      ])

      completedJobsElement = (
        <MemoryRouter>
          <CompletedJobs completedJobs={ completedJobs }/>
        </MemoryRouter>
      )
  })

  it('should render the completed jobs to the page', () => {

    const { getByTestId } = render(completedJobsElement)

    const completedJobsContainer = getByTestId('completed-jobs-container')
    const completedJob = getByTestId('0900')

    expect(completedJobsContainer).toBeInTheDocument()
    expect(completedJob).toBeInTheDocument()
  })
})
