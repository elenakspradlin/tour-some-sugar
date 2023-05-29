// database needs the venues and bands
// it sounds like bookings will be generated like assignments in deshawn's by using the information from venues and bands
// venues needs: an ID, a name, address, square footage, and maximum occupancy
// bands needs: an ID, a name, a number of members, a music genre, and a year they formed
// how to get dates on the bookings page?
// do either venues or bands need a foreign key to connect them?

const database = {
    venues: [{
        id: 1,
        name: "Sleeping Dog",
        address: "1212 X Avenue",
        squareFootage: 2300,
        maxCapacity: 500

    },
    {
        id: 2,
        name: "Pencil Factory",
        address: "456 Green Way",
        squareFootage: 3000,
        maxCapacity: 750
    },
    {
        id: 3,
        name: "David Lynch's House",
        address: "Muholland Drive",
        squareFootage: 6400,
        maxCapacity: 1000
    },
    {
        id: 4,
        name: "Shark Attack",
        address: "800 Zoom Circle",
        squareFootage: 1000,
        maxCapacity: 250
    },
    {
        id: 5,
        name: "Your Missed Notifications",
        address: "340 Elm Street",
        squareFootage: 5000,
        maxCapacity: 750
    },
    {
        id: 6,
        name: "It's Nice Go Outside",
        address: "980 Main Street",
        squareFootage: 4000,
        maxCapacity: 980
    },
    {
        id: 7,
        name: "The Garage",
        address: "245 Stonewall Street",
        squareFootage: 800,
        maxCapacity: 200
    },
    {
        id: 8,
        name: "The Little Dog",
        address: "1010 Ditmars Boulevard",
        squareFootage: 4000,
        maxCapacity: 900
    },
    {
        id: 9,
        name: "Mother Goose",
        address: "900 Coco Drive",
        squareFootage: 1700,
        maxCapacity: 450
    },
    {
        id: 10,
        name: "Mewsic City",
        address: "650 Fake Address Street",
        squareFootage: 9000,
        maxCapacity: 4000
    }],

    bands: [{
        id: 1,
        name: "Nietzche's Oediups Apartment Complex",
        members: 4,
        musicGenre: "Alternative",
        yearFormed: 2013
    },
    {
        id: 2,
        name: "DeShaun's Dog Walking Service",
        members: 10,
        musicGenre: "Pop",
        yearFormed: 2023

    },
    {
        id: 3,
        name: "Emotional Support Ship Hauler",
        members: 5,
        musicGenre: "Folk",
        yearFormed: 2023
    },
    {
        id: 4,
        name: "Team 5",
        members: 4,
        musicGenre: "Funk",
        yearFormed: 2023
    },
    {
        id: 5,
        name: "The Doctors",
        members: 3,
        musicGenre: "Alternative",
        yearFormed: 2013
    },
    {
        id: 6,
        name: "Roblox Oof Sound",
        members: 3,
        musicGenre: "Pop",
        yearFormed: 2010
    },
    {
        id: 7,
        name: "Mt. Everest Fastpass Line",
        members: 5,
        musicGenre: "Metal",
        yearFormed: 2002
    }],

    bookings: [{
        id: 1,
        venueId: 10,
        bandId: 6,
        date: "5/30/2023"
    },
    {
        id: 2,
        venueId: 2,
        bandId: 3,
        date: "5/30/2023"
    },
    {
        id: 2,
        venueId: 8,
        bandId: 1,
        date: "6/19/2023"
    },
    {
        id: 3,
        venueId: 6,
        bandId: 6,
        date: "7/8/2023"
    },
    {
        id: 4,
        venueId: 1,
        bandId: 7,
        date: "8/4/2023"
    },
    {
        id: 5,
        venueId: 9,
        bandId: 2,
        date: "8/6/2023"
    },
    {
        id: 6,
        venueId: 5,
        bandId: 4,
        date: "8/6/2023"
    },
    {
        id: 7,
        venueId: 3,
        bandId: 3,
        date: "8/9/2023"
    },
    {
        id: 8,
        venueId: 8,
        bandId: 1,
        date: "8/13/2023"
    },
    {
        id: 9,
        venueId: 3,
        bandId: 7,
        date: "8/18/2023"
    },
    {
        id: 10,
        venueId: 4,
        bandId: 3,
        date: "9/29/2023"
    },
    {
        id: 11,
        venueId: 4,
        bandId: 5,
        date: "9/29/2023"
    },
    {
        id: 12,
        venueId: 7,
        bandId: 1,
        date: "9/29/2023"
    },
    {
        id: 13,
        venueId: 4,
        bandId: 5,
        date: "10/3/2023"

    },
    {
        id: 14,
        venueId: 8,
        bandId: 3,
        date: "10/3/2023"

    },
    {
        id: 15,
        venueId: 8,
        bandId: 5,
        date: "10/3/2023"
    }]

}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}