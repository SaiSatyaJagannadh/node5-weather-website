const request = require('request')

const geocode = (address, callback) => {
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FpamFnYW5uYWRoOTkiLCJhIjoiY2ticWd6cWltMGFwODJ0cDh0dXR1NWZyciJ9.BSjK_REQp9KXcmOFYx4tnA"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode



