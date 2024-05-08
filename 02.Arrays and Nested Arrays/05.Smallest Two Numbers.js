function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let result = sorted.slice(0, 2).join(' ')

    console.log(result)
}

smallestTwoNumbers([30, 15, 50, 5])