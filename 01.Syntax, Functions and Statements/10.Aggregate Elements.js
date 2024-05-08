function aggregateElements(input) {

    let sum = 0
    let inverseSum = 0
    let strConcat = ''

    for (const inputElement of input) {
        sum += inputElement
    }

    for (const inputElement of input) {
        inverseSum += 1/inputElement
    }

    for (const inputElement of input) {
        strConcat += inputElement
    }

    console.log(sum)
    console.log(inverseSum)
    console.log(strConcat)
}

aggregateElements([1, 2, 3])