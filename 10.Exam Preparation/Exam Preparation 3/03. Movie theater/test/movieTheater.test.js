const {expect} = require('chai')
const movieTheater = require('../movieTheater.js')


describe('movieTheater', () => {
    describe('ageRestrictions', () => {
        it('should return correct message for movieRating "G"', () => {
            const result = movieTheater.ageRestrictions('G');
            expect(result).to.equal('All ages admitted to watch the movie');
        });

        it('should return correct message for movieRating "PG"', () => {
            const result = movieTheater.ageRestrictions('PG');
            expect(result).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });

        it('should return correct message for movieRating "R"', () => {
            const result = movieTheater.ageRestrictions('R');
            expect(result).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });

        it('should return correct message for movieRating "NC-17"', () => {
            const result = movieTheater.ageRestrictions('NC-17');
            expect(result).to.equal('No one under 17 admitted to watch the movie');
        });

        it('should return default message for unknown movieRating', () => {
            const result = movieTheater.ageRestrictions('Unknown');
            expect(result).to.equal('There are no age restrictions for this movie');
        });
    });

    describe('moneySpent', () => {
        it('should calculate total cost without discount', () => {
            const result = movieTheater.moneySpent(2, ['Nachos', 'Popcorn'], ['Soda', 'Water']);
            expect(result).to.equal('The total cost for the purchase is 44.50');
        });

        it('should calculate total cost with discount', () => {
            const result = movieTheater.moneySpent(4, ['Nachos', 'Popcorn'], ['Soda', 'Water']);
            expect(result).to.equal('The total cost for the purchase with applied discount is 59.60');
        });

        it('should throw an error for invalid input', () => {
            expect(() => movieTheater.moneySpent('2', ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.throw('Invalid input');
        });
    });

    describe('reservation', () => {
        it('should return the row with the largest number of free seats', () => {
            const rowsArray = [
                { rowNumber: 1, freeSeats: 7 },
                { rowNumber: 2, freeSeats: 5 },
                { rowNumber: 3, freeSeats: 10 },
            ];
            const result = movieTheater.reservation(rowsArray, 5);
            expect(result).to.equal(3);
        });

        it('should throw an error for invalid input', () => {
            expect(() => movieTheater.reservation('rowsArray', 5)).to.throw('Invalid input');
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }], '5')).to.throw('Invalid input');
        });
    });
});
