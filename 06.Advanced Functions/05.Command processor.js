function stringManipulator() {
    let internalString = ''

    return {
        append: string => internalString += string,
        removeStart: n => internalString = internalString.slice(n),
        removeEnd: n =>
            internalString = internalString.slice(0, -n),
        print: () =>
            console.log(internalString)

    }
}

stringManipulator(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);
stringManipulator(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);