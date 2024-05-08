function diagonalSums(input) {
    let firstDiagonal = 0
    let secondDiagonal = 0
    let firstIndex = 0
    let secondIndex = input[0].length - 1

    input.forEach(arr=>{
        firstDiagonal += arr[firstIndex++]
        secondDiagonal += arr[secondIndex--]
    })

    console.log(firstDiagonal + ' ' + secondDiagonal)
}

diagonalSums([[20, 40],
    [10, 60]])