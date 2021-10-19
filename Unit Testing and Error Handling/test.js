const expect = require('chai').expect;
const { isOddOrEven, lookupChar } = require('./module');

//Tests for isOddOrEven
// describe("isOddOrEven Tests", () => {
//     it("Test with invalid input", () => {
//         expect(isOddOrEven(3)).to.be.undefined;
//         expect(isOddOrEven([])).to.be.undefined;
//         expect(isOddOrEven({})).to.be.undefined;
//     });

//     it("Test with even input", () => {
//         expect(isOddOrEven("even")).to.equal("even");
//         expect(isOddOrEven("")).to.equal("even");
//     })

//     it("Test with odd input", () => {
//         expect(isOddOrEven("odd")).to.equal("odd");
//     })
// })

describe("lookupChar Tests", () => {
    it("Tests with invalid input", () => {
        expect(lookupChar(1, 3)).to.be.undefined;
        expect(lookupChar([], 3)).to.be.undefined;
        expect(lookupChar({}, 3)).to.be.undefined;
        expect(lookupChar('1', '1')).to.be.undefined;
        expect(lookupChar('1', 1.1)).to.be.undefined;
    });

    it("Tests with incorrect index", () => {
        expect(lookupChar("test", 10)).to.equal("Incorrect index");
        expect(lookupChar("test", -1)).to.equal("Incorrect index");
        expect(lookupChar("test", 100)).to.equal("Incorrect index");
    })

    it("Test with correct input", () => {
        expect(lookupChar("test", 1)).to.equal('e');
        expect(lookupChar("tests", 4)).to.equal('s');
        expect(lookupChar("new hope", 3)).to.equal(' ');
    })
})