import React from 'react'
import Job from './Job'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Job', () => {

  let jobElement
  let job1

  beforeEach(() => {

    job1 = (
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
      )

    jobElement = (
      <MemoryRouter>
        <Job job={job1}/>
      </MemoryRouter>
    )
  })

  it('should render jobs to the page', () => {
    const { getByTestId } = render(jobElement)
    const jobContainer = getByTestId('job-container')
    const jobTime= getByTestId('job-time')
    const businessName = getByTestId('business-name')
    const addressContainer = getByTestId('address-container')
    const streetAddress = getByTestId('street-address')
    const city = getByTestId('city')
    const jobDescriptionContainer = getByTestId('job-description-container')
    const bathroomInfo = getByTestId('bathroom-info')
    const breakroomInfo = getByTestId('breakroom-info')
    const jobPay = getByTestId('job-pay')

    expect(jobContainer).toBeInTheDocument()
    expect(jobTime).toBeInTheDocument()
    expect(businessName).toBeInTheDocument()
    expect(addressContainer).toBeInTheDocument()
    expect(streetAddress).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(jobDescriptionContainer).toBeInTheDocument()
    expect(bathroomInfo).toBeInTheDocument()
    expect(breakroomInfo).toBeInTheDocument()
    expect(jobPay).toBeInTheDocument()
  })

})
