import React from 'react'
import Favorites from './Favorites'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';

describe('Favorites', () => {

  let favoritesElement
  let favoriteJobs

  beforeEach(() => {

    favoriteJobs = ([
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

    favoritesElement = (
      <MemoryRouter>
        <Favorites favoriteJobs={ favoriteJobs }/>
      </MemoryRouter>
    )
  })

  it('should', () => {

    const { getByTestId } = render(favoritesElement)

    const favoriteJobsContainer = getByTestId('favorite-jobs-container')
    const job = getByTestId('0900')

    expect(favoriteJobsContainer).toBeInTheDocument()
    expect(job).toBeInTheDocument()
  })

  //Test that jobs are links and that the url path changes when a job is clicked

})
