function sameNumbers(num) {
    const digitArray = Array.from(String(num), Number)
    const firstDigit = digitArray[0]
    const areAllDigitsSame = digitArray.every(digit => digit === firstDigit)
    const sumOfDigits = digitArray.reduce((sum, digit) => sum + digit, 0)

    console.log(areAllDigitsSame)
    console.log(sumOfDigits)
}

sameNumbers(2222222)