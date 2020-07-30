import React, { useState, useEffect } from 'react'

function useApp() {
    const [error, setError] = useState('')
    const [businessList, setBusinessList] = useState([])

    const businessNames = [
        "Brothers", "Ophelia's", "Oskar Blues", "Slice Works", "Garbanzo", "Turing School of Software and Design",
        "Randos Bar & Grill", "Migration Taco", "Jax", "Whole Foods", "Union Station", "REI", "Tupelo Honey",
        "Denver Performing Arts Complex", "Beet Box Bakery", "Watercourse Food", "City O' City", "Make Believe Bakery",
        "Random Marijuana Shop", "Punchbowl Social", "3 Kings", "Lost Lake", "Some Lawyer's Office", "Wax Trax"
    ]

    const numBathrooms = [
        1, 2, 3, 4,
    ]

    const toiletsPerBathroom = [
        1, 2, 3, 4, 5, 6, 7
    ]

    const getRandomPeople = () => {
      return fetch('https://randomuser.me/api/?results=100')
              .then(res => res.json())  
    }

    const addBusinessListToState = async () => {
        const people = await getRandomPeople()
        const peopleInColo = movePeopleToColo(people.results)
        const businessList = turnPeopleIntoBusiness(peopleInColo)
        createJobs(businessList)
        setBusinessList(businessList)
    }   

    const movePeopleToColo = (peopleInfo) => {
        return peopleInfo.map(person => {
            const {street} = person.location
            const location = {
                street: street,
                city: 'Denver',
                state: 'CO', 
                country: 'US',
                postcode: 80202
            }
            person.location = location
            return person
        } )
    } 

    const turnPeopleIntoBusiness = (peopleInfo) => {
        return peopleInfo.map(person => {
            var randomBusiness = businessNames[Math.floor(Math.random() * businessNames.length)];
            var businessBathrooms = numBathrooms[Math.floor(Math.random() * numBathrooms.length)];
            var businessToiletsPerBathroom = toiletsPerBathroom[Math.floor(Math.random() * toiletsPerBathroom.length)];
            person.bathroomInfo = {numBathrooms: businessBathrooms, toiletsPerBathroom: businessToiletsPerBathroom}
            person.businessName = randomBusiness   
            return person
        })
    }

    const createJobs = (businessList) => {
        businessList.map(business => console.log(business))
    }

    useEffect(async () => {
        addBusinessListToState()
    }, [])
    
    
    // people.forEach(person => console.log(person))
    

    console.log(businessList);
    return 
}

    
export default useApp
