const {expect} = require('chai')
const weddingDay = require('../weddingDay.js')


describe('weddingDay', () => {
    describe('pickVenue', () => {

        it('should return a message if the venue meets the requirements', () => {
            const capacity = 200;
            const pricePerGuest = 100;
            const location = 'Varna';
            const expected = 'This venue meets the requirements, with capacity of 200 guests and 100$ cover.';

            const result = weddingDay.pickVenue(capacity, pricePerGuest, location);

            expect(result).to.equal(expected);
        });

        it('should return a message if the venue does not meet the requirements', () => {
            const capacity = 100;
            const pricePerGuest = 150;
            const location = 'Varna';
            const expected = 'This venue does not meet your requirements!';

            const result = weddingDay.pickVenue(capacity, pricePerGuest, location);

            expect(result).to.equal(expected);
        });

        it('should throw an error for invalid input', () => {
            const capacity = '200';
            const pricePerGuest = '100';
            const location = 25;

            expect(() => {
                weddingDay.pickVenue(capacity, pricePerGuest, location);
            }).to.throw(Error, 'Invalid Information!');
        });

        it('should throw an error for incorrect location', () => {
            const capacity = 200;
            const pricePerGuest = 100;
            const location = 'Sofia';

            expect(() => {
                weddingDay.pickVenue(capacity, pricePerGuest, location);
            }).to.throw(Error, 'The location of this venue is not in the correct area!');
        });
    });

    describe('otherSpendings', () => {
        it('should return the total price with discount', () => {
            const weddingDecoration = ['flowers', 'Fabric drapes and curtains'];
            const photography = ['pictures', 'video'];
            const discount = true;
            const expected = 'You spend 2465$ for wedding decoration and photography with 15% discount!';

            const result = weddingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(expected);
        });

        it('should return the total price without discount', () => {
            const weddingDecoration = ['flowers'];
            const photography = ['video'];
            const discount = false;
            const expected = 'You spend 1800$ for wedding decoration and photography!';

            const result = weddingDay.otherSpendings(weddingDecoration, photography, discount);

            expect(result).to.equal(expected);
        });

        it('should throw an error for invalid input', () => {
            const weddingDecoration = 'flowers';
            const photography = ['pictures', 'video'];
            const discount = true;

            expect(() => {
                weddingDay.otherSpendings(weddingDecoration, photography, discount);
            }).to.throw(Error, 'Invalid Information!');
        });
    });

    describe('tableDistribution', () => {
        it('should return a message for fewer people on table', () => {
            const guests = 20;
            const tables = 5;
            const expected = 'There is only 4 people on every table, you can join some tables.';

            const result = weddingDay.tableDistribution(guests, tables);

            expect(result).to.equal(expected);
        });

        it('should return a message for enough people on table', () => {
            const guests = 40;
            const tables = 5;
            const expected = 'You have 5 tables with 8 guests on table.';

            const result = weddingDay.tableDistribution(guests, tables);

            expect(result).to.equal(expected);
        });

        it('should throw an error for invalid input', () => {
            const guests = '40';
            const tables = 5;

            expect(() => {
                weddingDay.tableDistribution(guests, tables);
            }).to.throw(Error, 'Invalid Information!');
        });
    });
});
