function cookingByNumbers(number, ...operations) {
    Number(number)

    const commands = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x - x * 0.2
    }

    for (let i = 0; i < operations.length; i++) {
        const cmd = operations[i]
        number = commands[cmd](number)
        console.log(number)
    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')