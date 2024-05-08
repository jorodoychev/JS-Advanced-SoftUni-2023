function roadRadar(speed, area) {

    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        logSpeeding(speeding)
    } else {
        console.log(`Driving ${speed} km/h in a ${allowedSpeeds[area]} zone`)
    }

    function logSpeeding(speeding) {
        let status
        if (speeding <= 20) {
            status = 'speeding'
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - ${status}`)
        } else if (speeding <= 40) {
            status = 'excessive speeding'
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - ${status}`)
        } else {
            status = 'reckless driving'
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - ${status}`)
        }
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')