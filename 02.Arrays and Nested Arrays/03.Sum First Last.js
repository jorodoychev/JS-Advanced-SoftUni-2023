function sumFirstLast(arr) {
    let numbers = arr.map(Number)
    let result = numbers[0] + numbers[numbers.length-1]

    console.log(result)
}

sumFirstLast(['20', '30', '40'])