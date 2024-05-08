function countEqualNeighborPairs(matrix) {
    let count = 0

    // Iterate through each element in the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Check the neighbor elements
            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                count++
            }
            if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
                count++
            }
        }
    }

    return count
}

countEqualNeighborPairs([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
)