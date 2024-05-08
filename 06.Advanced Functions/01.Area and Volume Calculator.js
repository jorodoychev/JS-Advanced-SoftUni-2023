function solve(area, vol, input) {
    const objects = JSON.parse(input)
    const result = []

    for (const obj of objects) {
        const areaValue = Math.abs(area.call(obj))
        const volume = Math.abs(vol.call(obj))
        result.push({area: areaValue, volume})

    }

    return result
}

function area() {
    return Math.abs(this.x * this.y)
}

function vol() {
    return Math.abs(this.x * this.y * this.z)
}

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`)