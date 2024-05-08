function negativePositiveNumbers(arr) {
    let result = []

    arr.forEach((x, i) => {
        if (x < 0) {
            result.unshift(arr[i])
        } else {
            result.push(arr[i])
        }
    })

    console.log(result.join('\n'))

}

negativePositiveNumbers([7, -2, 8, 9])