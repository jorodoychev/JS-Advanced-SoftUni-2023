function sortingNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let result = []

    while (sorted.length !== 0) {
        let firstEl = sorted.shift()
        let lastEl = sorted.pop()
        result.push(firstEl, lastEl)
    }

    return result
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])