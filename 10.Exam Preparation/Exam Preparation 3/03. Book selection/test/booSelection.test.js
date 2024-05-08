const { assert } = require('chai');
const { expect } = require('chai');
const bookSelection = require('../bookSelection');

describe('bookSelection', () => {

    describe('isGenreSuitable', () => {
        it('should return a message indicating unsuitability for "Thriller" genre and age <= 12', () => {
            const genre = 'Thriller';
            const age = 12;
            const expected = 'Books with Thriller genre are not suitable for kids at 12 age';
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(expected);
        });

        it('should return a message indicating unsuitability for "Horror" genre and age <= 12', () => {
            const genre = 'Horror';
            const age = 10;
            const expected = 'Books with Horror genre are not suitable for kids at 10 age';
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(expected);
        });

        it('should return a suitable message for any genre and age > 12', () => {
            const genre = 'Fantasy';
            const age = 15;
            const expected = 'Those books are suitable';
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(expected);
        });

        it('should return a suitable message for any genre and age <= 12 if genre is not "Thriller" or "Horror"', () => {
            const genre = 'Romance';
            const age = 9;
            const expected = 'Those books are suitable';
            const result = bookSelection.isGenreSuitable(genre, age);
            expect(result).to.equal(expected);
        });
    });


    describe('isItAffordable', () => {
        it('should return appropriate message for affordable book', () => {
            const result = bookSelection.isItAffordable(20, 50);
            assert.strictEqual(result, 'Book bought. You have 30$ left');
        });

        it('should return appropriate message for unaffordable book', () => {
            const result = bookSelection.isItAffordable(50, 30);
            assert.strictEqual(result, "You don't have enough money");
        });

        it('should throw an error for invalid input', () => {
            assert.throw(() => {
                bookSelection.isItAffordable('invalid', 30);
            }, 'Invalid input');
        });
    });

    describe('suitableTitles', () => {
        it('should return array of suitable book titles', () => {
            const books = [
                { title: 'The Da Vinci Code', genre: 'Thriller' },
                { title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy' },
                { title: 'The Shining', genre: 'Horror' },
            ];
            const result = bookSelection.suitableTitles(books, 'Thriller');
            assert.deepStrictEqual(result, ['The Da Vinci Code']);
        });

        it('should throw an error for invalid input', () => {
            assert.throw(() => {
                bookSelection.suitableTitles('invalid', 'Thriller');
            }, 'Invalid input');
        });
    });
});
