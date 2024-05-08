function extract(elementId) {
    const p = document.getElementById(elementId).textContent
    const pattern = /\(([^)]+)\)/g
    const result = []

    let match = pattern.exec(p)

    while (match) {
        result.push(match[1])
        match = pattern.exec(p)
    }

    return result.join(', ')
}