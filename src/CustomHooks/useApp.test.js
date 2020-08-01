import React from 'react'
import UseApp from './useApp'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { renderHook } from '@testing-library/react-hooks'


describe('useApp', () => {

  let useAppElement

  beforeEach(() => {

    useAppElement = (
      <MemoryRouter>
        <UseApp />
      </MemoryRouter>
    )

    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        jobs: [
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
      })
    }))
    jest.setTimeout(10000)

  })

  afterEach(() => {
    global.fetch.mockClear()
  })

    it('should make the api call to fetch the default value and set it in the state', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useApp())
    await waitForNextUpdate()
    expect(fetch).toHaveBeenCalledTimes(1)
    
    expect(result.current.jobs.length).toEqual(1)
  })
})
