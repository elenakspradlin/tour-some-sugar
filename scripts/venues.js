import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
cont bookings = getBookings()
const bands = getBands()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li data-id="${venue.id}"
                    data-name="${venue.name}"
                    data-address="${venue.address}"
                    data-squareFootage="${venue.squareFootage}"
                    data-type="venue"
                    >${venue.name}
                    </li>`
    }

    html += "</ul>"

    return html
}


// get the array of bands
// create a function that extracts the band id from the bookings database
// is item clicked on a venue
// create new variable and set it equal to an empty array

//window.alert(`&{arrayOfBands} have been booked to play here`)