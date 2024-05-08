function fruit(fruit, weight, money) {

    const neededMoney = weight / 1000 * money
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`)
}

fruit('orange', 2500, 1.80)