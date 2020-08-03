import React from 'react'
import StartJob from './StartJob'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';


describe('StartJob', () => {

  let startJobElement
  let startJobElement1
  let jobInfo
  let setStartTime
  let setEndTime

  beforeEach(() => {
    setStartTime = jest.fn().mockImplementation(() => {})
    setEndTime = jest.fn().mockImplementation(() => {})


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
        <StartJob jobInfo={jobInfo} setStartTime={setStartTime} setEndTime={setEndTime} />
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

  it('should record the job start time', () => {
    const { getByTestId } = render(startJobElement)

    const startJobBtn = getByTestId('start-job')

    fireEvent.click(startJobBtn)
    expect(setStartTime).toBeCalledTimes(1)
  })

  it('shouild record the job end time', () => {
    const { getByTestId } = render(startJobElement)

    const finishJobBtn = getByTestId('finish-job')

    fireEvent.click(finishJobBtn)

    expect(setEndTime).toBeCalledTimes(1)
  })

  it('should change the url path when the link is clicked', () => {
    const { getByTestId } = render(startJobElement)

    const submitRatingBtn = getByTestId('submit-rating-btn')

  })

  it('should change to the route path of /RateBusiness when the finsh job button is clicked', async () => {
    const testHistoryObject = createMemoryHistory()

    const { getByTestId } = render(
      <Router history={testHistoryObject}>
        <StartJob jobInfo={jobInfo} setStartTime={setStartTime} setEndTime={setEndTime} />
      </Router>
    )

    expect(testHistoryObject.location.pathname).toEqual('/')

    const submitRatingLink = getByTestId('submit-rating-btn')

    fireEvent.click(submitRatingLink)

    expect(testHistoryObject.location.pathname).toEqual('/RateBusiness')
  })

})
