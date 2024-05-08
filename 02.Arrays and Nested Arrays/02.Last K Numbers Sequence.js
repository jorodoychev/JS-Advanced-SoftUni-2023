function lastKNumbersSequence(n, k) {

    const sequence = [1]

    for (let i = 1; i < n; i++) {

        const sum = sequence
            .slice(Math.max(0, i - k))
            .reduce((a, b) => a + b, 0)

        sequence.push(sum)

    }

    return sequence

}

lastKNumbersSequence(6, 3)