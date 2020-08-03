import React from 'react'
import JobsContainer from './JobsContainer'
import useJobsContainer from '../CustomHooks/useJobsContainer'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';

describe('JobsContainer', () => {

  let jobsContainerElement
  let availableJobsList
  let currentUser
  let currentUsersJobs
  let favoriteJobs
  let jobs
  let removeFromFavorites
  let findJob
  let setCurrentJob
  let setCurrentUsersJobs
  let setFavoriteJobs
  let useJobsContainer

  beforeEach(() => {
    currentUser = 3
    findJob = jest.fn().mockImplementation(() => {})
    setCurrentJob = jest.fn().mockImplementation(() => {})
    setCurrentUsersJobs = jest.fn().mockImplementation(() => {})
    setFavoriteJobs = jest.fn().mockImplementation(() => {})

    currentUsersJobs = [
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
    ]

    useJobsContainer = jest.fn().mockImplementation((currentUsersJobs, currentUser) => {
      return  currentUsersJobs
    })

    availableJobsList = [
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
        },
      {
          bathroomInfo: {numBathrooms: 2, toiletsPerBathroom: 1, sinksPerBathroom: 1},
          breakroomInfo: 1,
          businessName: "Some Other Bank",
          contactPerson: {title: "Mrs", first: "Norma", last: "Hills"},
          cost: 16,
          employeeId: 4,
          jobDate: "07/31/2020",
          jobId: 1596216852751,
          location: {street: {number: 7913, name: "York St"}, city: "Denver", state: "CO", country: "US", postcode: 80202},
          personImage: {large: "https://randomuser.me/api/portraits/women/32.jpg", medium: "https://randomuser.me/api/portraits/med/women/32.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"},
          phone: "(507)-308-3728",
          time: "0900"
        }
    ]

    jobsContainerElement = (
      <MemoryRouter>
        <JobsContainer
          currentUser={ currentUser }
          currentUsersJobs={ currentUsersJobs }
          favoriteJobs={ currentUsersJobs }
          findJob={ findJob }
          jobs={ availableJobsList }
          removeFromFavorites={ removeFromFavorites }
          setCurrentJob={ setCurrentJob }
          setCurrentUsersJobs={setCurrentUsersJobs}
          setFavoriteJobs={ setFavoriteJobs }
        />
      </MemoryRouter>
    )
  })

  it('should render the jobs container', () => {

    const { getByTestId } = render(jobsContainerElement)

    const JobsContainer = getByTestId("jobs-container")

  })
})
