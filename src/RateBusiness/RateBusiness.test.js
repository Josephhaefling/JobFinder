import React from 'react'
import RateBusiness from './RateBusiness'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'


  describe('RateBusiness', () => {
    let rateBusinessElement
    let job1
    let availableJobsList

    beforeEach(() => {

      availableJobsList = (
        [
          {
            bathroomInfo: {numBathrooms: 2, toiletsPerBathroom: 1, sinksPerBathroom: 1},
              breakroomInfo: 1,
              businessName: "Some Dinner",
              contactPerson: {title: "Mr", first: "Mannny", last: "Gills"},
              cost: 16,
              employeeId: 4,
              jobDate: "07/31/2020",
              jobId: 1596216852757,
              location: {street: {number: 7913, name: "York St"}, city: "Denver", state: "CO", country: "US", postcode: 80202},
              personImage: {large: "https://randomuser.me/api/portraits/women/32.jpg", medium: "https://randomuser.me/api/portraits/med/women/32.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"},
              phone: "(507)-308-3728",
              time: "0900"
            },{
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
                time: "1000"
              },{
                bathroomInfo: {numBathrooms: 2, toiletsPerBathroom: 1, sinksPerBathroom: 1},
                  breakroomInfo: 1,
                  businessName: "Some Gym",
                  contactPerson: {title: "Mr", first: "Norma", last: "Pills"},
                  cost: 16,
                  employeeId: 4,
                  jobDate: "07/31/2020",
                  jobId: 1596216852759,
                  location: {street: {number: 7913, name: "York St"}, city: "Denver", state: "CO", country: "US", postcode: 80202},
                  personImage: {large: "https://randomuser.me/api/portraits/women/32.jpg", medium: "https://randomuser.me/api/portraits/med/women/32.jpg", thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg"},
                  phone: "(507)-308-3728",
                  time: "0900"
                }
        ]
    )

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

      rateBusinessElement = (
        <MemoryRouter>
          <RateBusiness
          currentJob={ job1 }
          availableJobsList={ availableJobsList }
           />
        </MemoryRouter>
      )
    })

    it("should render the rate business form", () => {

      const { getByText, getByTestId } = render(rateBusinessElement)

      const rateBusinessForm = getByTestId('rate-business-form')
      const submitBtn = getByTestId('submit-btn')
      const submitLink = getByTestId('submit-link')
      const question1 = getByText('Did you change the trash?')
      const question2 = getByText('Did you refill the toilet paper?')
      const question3 = getByText('Did you refill the hand soap?')
      const question4 = getByText('Did you refill the paper towels?')
      const question5 = getByText('Did you clean all of the toilets?')
      const question6 = getByText('Did you clean all of the sinks?')
      const question7 = getByText('Was job easy to find?')
      const question8 = getByText('Was contact person present?')
      const question9 = getByText('Would you like to do this job again?')

      expect(rateBusinessForm).toBeInTheDocument()
      expect(question1).toBeInTheDocument()
      expect(question2).toBeInTheDocument()
      expect(question3).toBeInTheDocument()
      expect(question4).toBeInTheDocument()
      expect(question5).toBeInTheDocument()
      expect(question6).toBeInTheDocument()
      expect(question7).toBeInTheDocument()
      expect(question8).toBeInTheDocument()
      expect(question9).toBeInTheDocument()


    })
  })
