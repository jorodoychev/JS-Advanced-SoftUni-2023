function foo() {
    function Hero(name, rss, attack, message) {
        return {
            name,
            message,
            health: 100,
            [rss]: 100,
            [attack]: function (msg = "") {
                console.log(this.message + msg)
                this[rss] -= 1
            },
        }
    }

    return {
        mage: n => new Hero(n, "mana", `cast`, `${n} cast `),
        fighter: n => new Hero(n, "stamina", `fight`, `${n} slashes at the foe!`),
    }
}