function biggestElement(input) {

    let arr = []

    input.map((x) => {
        arr.push(...x)
        arr.sort((a, b) => a - b)
    });

    return arr[arr.length-1]

}

// function findBiggestElement(matrix) {
//     let biggestElement = Number.NEGATIVE_INFINITY;
//
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] > biggestElement) {
//                 biggestElement = matrix[i][j];
//             }
//         }
//     }
//
//     return biggestElement;
// }

biggestElement([[20, 50, 10],
    [8, 33, 145]])