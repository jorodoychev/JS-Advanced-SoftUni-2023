function reduceFuncParams(currencyFormatter) {
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;
    return value => currencyFormatter(separator, symbol, symbolFirst, value)
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substring(4,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = reduceFuncParams(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71