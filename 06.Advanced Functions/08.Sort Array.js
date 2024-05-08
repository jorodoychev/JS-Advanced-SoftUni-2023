function sortArray(arr, type) {

    const dict = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }

    return arr.sort(dict[type])

}

sortArray([14, 7, 17, 6, 8], 'desc')