import { getVenues, getBands, getBookings } from "./database.js"

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()



// Function whose responsibility is to find the band of a booking
const findBand = (booking, allBands) => {
    let bookedBand = { name: "Incorrect" }

    for (const band of allBands) {
        if (band.id === booking.bandId) {
            bookedBand = band
        }
    }

    return bookedBand
}

// Function whose responsibility is to find the venue for a booking
const findVenue = (booking, allVenues) => {
    let bookedVenue = { name: "Incorrect" }

    for (const venue of allVenues) {
        if (venue.id === booking.venueId) {
            bookedVenue = venue
        }
    }

    return bookedVenue
}

export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const venue = findVenue(booking, venues)
        const band = findBand(booking, bands)

        html += `<li data-id="${booking.id}"
                    data-venueIdForeignKey="${booking.venueId}"
                    data-bandIdForeignKey="${booking.bandId}"
                    data-dayOfShow="${booking.date}"
                    data-type="booking"
                    >${band.name} is playing at ${venue.name} on ${booking.date}
                    </li>`
    }

    html += "</ul>"

    return html
}