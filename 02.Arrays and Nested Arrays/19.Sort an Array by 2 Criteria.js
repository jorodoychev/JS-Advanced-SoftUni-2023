function solve(arr) {
    let sorted = arr.sort((a, b) => {
        let firstCriteria = a.length - b.length
        let secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria
    })

    console.log(sorted.join('\n'))
}

solve(['alpha',
    'beta', 'gamma'])