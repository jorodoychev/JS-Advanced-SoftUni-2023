function objectFactory(library, orders) {
    const result = []

    for (const order of orders) {
        const template = order.template
        const obj = Object.assign({}, template)
        const parts = order.parts
        for (const methodName of parts) {
            obj[methodName] = library[methodName]
        }

        result.push(obj);
    }
    return result
}
