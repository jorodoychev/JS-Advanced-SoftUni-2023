function biggerHalf(arr) {
    const sortedArray = arr.sort((a, b) => a - b)
    const middleIndex = Math.floor(sortedArray.length / 2)
    return sortedArray.slice(middleIndex)
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])