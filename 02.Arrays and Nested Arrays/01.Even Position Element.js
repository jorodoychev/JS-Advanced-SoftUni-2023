function findElementsAtEvenPositions(array) {
    let evenElements = array
        .filter((_, index) => index % 2 === 0)
        .join(' ')

    console.log(evenElements)
}

findElementsAtEvenPositions(['20', '30', '40', '50', '60'])