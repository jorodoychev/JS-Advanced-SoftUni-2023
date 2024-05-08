function stringLength(word1, word2, word3) {
    let sumLength = (word1 + word2 + word3).length
    let averageLength = Math.floor(sumLength / 3)

    console.log(sumLength)
    console.log(averageLength)
}

stringLength('chocolate', 'ice cream', 'cake' )