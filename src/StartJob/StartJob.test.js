import React from 'react'
import StartJob from './StartJob'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('StartJob', () => {

  let startJobElement
  let jobInfo

  beforeEach(() => {

    jobInfo = (
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

    startJobElement = (
      <MemoryRouter>
        <StartJob jobInfo={jobInfo} />
      </MemoryRouter>
    )
  })

  it('should render the current job to the page', () => {
    const { getByTestId } = render(startJobElement)
    const contactPerson = getByTestId('contact-person')
    const contactImage = getByTestId('contact-image')
    const businessName = getByTestId('business-name')
    const addressContainer = getByTestId('address-container')
    const streetAddress = getByTestId('street-address')
    const city = getByTestId('city')
    const jobDescriptionContainer = getByTestId('job-description-container')
    const bathroomInfo = getByTestId('bathroom-info')
    const breakroomInfo = getByTestId('breakroom-info')
    const jobPay = getByTestId('job-pay')
    const startJob = getByTestId('start-job')
    const finishJob = getByTestId('finish-job')

    expect(contactPerson).toBeInTheDocument()
    expect(contactPerson).toBeInTheDocument()
    expect(contactImage).toBeInTheDocument()
    expect(businessName).toBeInTheDocument()
    expect(addressContainer).toBeInTheDocument()
    expect(streetAddress).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(jobDescriptionContainer).toBeInTheDocument()
    expect(bathroomInfo).toBeInTheDocument()
    expect(jobPay).toBeInTheDocument()
    expect(startJob).toBeInTheDocument()
    expect(finishJob).toBeInTheDocument()
  })

})
