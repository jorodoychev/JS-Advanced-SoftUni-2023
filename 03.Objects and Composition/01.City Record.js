function cityRecord(name, population, treasury) {
    const city ={}

    city.name = name
    city.population = population
    city.treasury = treasury

    return city

    // return {
    //     name,
    //     population,
    //     treasury
    // }
}


cityRecord('Tortuga',
    7000,
    15000)