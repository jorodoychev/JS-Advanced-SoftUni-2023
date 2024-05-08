const {expect} = require('chai')
const lottery = require('../lottery.js')

describe('Lottery', () => {
    describe('buyLotteryTicket', () => {
        it('should throw an error if buy is false', () => {
            expect(() => lottery.buyLotteryTicket(10, 1, false)).to.throw('Unable to buy lottery ticket!')
        })

        it('should throw an error for invalid input', () => {
            expect(() => lottery.buyLotteryTicket(-10, 1, true)).to.throw('Invalid input!')
            expect(() => lottery.buyLotteryTicket(10, 0, true)).to.throw('Invalid input!')
            expect(() => lottery.buyLotteryTicket(10, 1, 'true')).to.throw('Invalid input!')
        })

        it('should return the correct message for valid input', () => {
            expect(lottery.buyLotteryTicket(10, 5, true)).to.equal('You bought 5 tickets for 50$.')
        })
    })

    describe('checkTicket', () => {
        it('should throw an error for invalid input', () => {
            expect(() => lottery.checkTicket([1, 2, 3], [4, 5, 6])).to.throw('Invalid input!')
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [4, 5, 6])).to.throw('Invalid input!')
        })

        it('should return the correct message for winning numbers', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!')
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 7])).to.equal('Congratulations you win, check your reward!')
        })
    })

    describe('secondChance', () => {
        it('should throw an error for invalid input', () => {
            expect(() => lottery.secondChance('1', [1, 2, 3])).to.throw('Invalid input!')
            expect(() => lottery.secondChance(1, '1, 2, 3')).to.throw('Invalid input!')
        })

        it('should return the correct message for winning ticket', () => {
            expect(lottery.secondChance(1, [1, 2, 3])).to.equal('You win our second chance prize!')
        })

        it('should return the correct message for non-winning ticket', () => {
            expect(lottery.secondChance(4, [1, 2, 3])).to.equal("Sorry, your ticket didn't win!")
        })
    })
})

