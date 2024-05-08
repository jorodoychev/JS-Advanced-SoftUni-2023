function carFactory(order) {
    const engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];

    const carriages = [
        {type: 'hatchback', color: ''},
        {type: 'coupe', color: ''}
    ];

    let {power, color, carriage, wheelsize} = order;

    const engine = engines.find(engine => engine.power >= power);

    const selectedCarriage = carriages.find(c => c.type === carriage);

    selectedCarriage.color = color;

    if (wheelsize % 2 === 0) {
        wheelsize -= 1
    }


    const car = {
        model: order.model,
        engine,
        carriage: selectedCarriage,
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    };

    return car

}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
})