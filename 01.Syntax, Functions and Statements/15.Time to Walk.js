function timeToWalk(steps, footprint, speed) {
    const distanceMeters = steps * footprint
    const speedMeterSec = speed / 3.6
    const time = distanceMeters / speedMeterSec
    const rest = Math.floor(distanceMeters / 500)

    const timeHr = Math.floor(time / 3600)
    const timeMin = Math.floor(time / 60)
    const timeSec = Math.round(time - timeMin * 60)

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

timeToWalk(4000, 0.60, 5)