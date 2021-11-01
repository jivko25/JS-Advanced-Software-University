let library = require('./library');
const { assert } = require('chai');

describe("Test library", function () {
    describe("Test calcPriceOfBook", function () {

        it("should return sum of 20.00 when book age is more or equal 1981", function () {
            assert.equal(library.calcPriceOfBook('Harry Potter', 1981), 'Price of Harry Potter is 20.00');
            assert.equal(library.calcPriceOfBook('Harry Potter', 2001), 'Price of Harry Potter is 20.00');
        });

        it("should return sum of 10.00 when book age is 1980 or less", function () {
            assert.equal(library.calcPriceOfBook('Harry Potter', 1980), 'Price of Harry Potter is 10.00');
            assert.equal(library.calcPriceOfBook('Harry Potter', 1920), 'Price of Harry Potter is 10.00');
            assert.equal(library.calcPriceOfBook('Harry Potter', -100), 'Price of Harry Potter is 10.00');
        });

        it("should return empty name for book when empty string is passed", function () {
            assert.equal(library.calcPriceOfBook('', 1981), 'Price of  is 20.00');
        });

        it("should throw an error", function () {
            assert.throw(() => library.calcPriceOfBook(undefined, 1980));
            assert.throw(() => library.calcPriceOfBook([], 1980));
            assert.throw(() => library.calcPriceOfBook({}, 1980));
            assert.throw(() => library.calcPriceOfBook(null, 1980));
            assert.throw(() => library.calcPriceOfBook(1981, 1980));
            assert.throw(() => library.calcPriceOfBook(true, 1980));
            assert.throw(() => library.calcPriceOfBook(false, 1980));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', '2001'));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', 2005.5));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', []));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', {}));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', true));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', null));
            assert.throw(() => library.calcPriceOfBook('Harry Potter', undefined));
        });
    });

    describe('test findBook', () => {
        it('should return positive answer when the book is in the library', () => {
            assert.equal(library.findBook(["Harry Potter", "Harry Potter 2", "Harry Potter 3"], "Harry Potter"), 'We found the book you want.');
        });

        it('should return negative answer when the book is not in the library', () => {
            assert.equal(library.findBook(["Harry Potter", "Harry Potter", "Harry Potter"], "Harry Potter and the half-blood prince"), 'The book you are looking for is not here!');
        });

        it('should throw when arrays is empty', () => {
            assert.throw(() => library.findBook([], 'Harry Potter'));
        })

    })

    describe('test arrange books', () => {
        it('should throw when argument passed is not an integer or negative', () => {
            assert.throw(() => library.arrangeTheBooks('2001'));
            assert.throw(() => library.arrangeTheBooks([]));
            assert.throw(() => library.arrangeTheBooks({}));
            assert.throw(() => library.arrangeTheBooks(true));
            assert.throw(() => library.arrangeTheBooks(null));
            assert.throw(() => library.arrangeTheBooks(undefined));
            assert.throw(() => library.arrangeTheBooks(1980.90));
            assert.throw(() => library.arrangeTheBooks(-1));
        })
 

        it('should return positive answer when there is enough space', () => {
            assert.equal(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
            assert.equal(library.arrangeTheBooks(38), 'Great job, the books are arranged.');
        })

        it('should return negative answer when there is no enough space', () => {
            assert.equal(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
        })
    })
});