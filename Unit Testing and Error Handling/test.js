const expect = require('chai').expect;
const { isOddOrEven, lookupChar, mathEnforcer } = require('./module');

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

//Tests for lookupChar
// describe("lookupChar Tests", () => {
//     it("Tests with invalid input", () => {
//         expect(lookupChar(1, 3)).to.be.undefined;
//         expect(lookupChar([], 3)).to.be.undefined;
//         expect(lookupChar({}, 3)).to.be.undefined;
//         expect(lookupChar('1', '1')).to.be.undefined;
//         expect(lookupChar('1', 1.1)).to.be.undefined;
//     });

//     it("Tests with incorrect index", () => {
//         expect(lookupChar("test", 10)).to.equal("Incorrect index");
//         expect(lookupChar("test", -1)).to.equal("Incorrect index");
//         expect(lookupChar("test", 100)).to.equal("Incorrect index");
//     })

//     it("Test with correct input", () => {
//         expect(lookupChar("test", 1)).to.equal('e');
//         expect(lookupChar("tests", 4)).to.equal('s');
//         expect(lookupChar("new hope", 3)).to.equal(' ');
//     })
// })

//Tests for mathEnforcer

describe("mathEnforcer Tests", () => {
    it("Expect undefined from addFive", () => {
        expect(mathEnforcer.addFive('5')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive("five")).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    })

    it("Expect correct answer from addFive", () => {
        expect(mathEnforcer.addFive(5)).to.equal(10);
        expect(mathEnforcer.addFive(-1)).to.equal(4);
        expect(mathEnforcer.addFive(1.1)).to.equal(6.1);
    })

    it("Expect undefined from subtractTen", () => {
        expect(mathEnforcer.subtractTen('10')).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen("five")).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    })

    it("Expect correct answer from subtractTen", () => {
        expect(mathEnforcer.subtractTen(10)).to.equal(0);
        expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
    })

    it("Expect undefined from sum", () => {
        expect(mathEnforcer.sum(5, "five")).to.be.undefined;
        expect(mathEnforcer.sum("five", "five")).to.be.undefined;
        expect(mathEnforcer.sum("five", 5)).to.be.undefined;
        expect(mathEnforcer.sum(undefined, "five")).to.be.undefined;
        expect(mathEnforcer.sum(5, [])).to.be.undefined;
        expect(mathEnforcer.sum({}, "five")).to.be.undefined;
        expect(mathEnforcer.sum('f', 5)).to.be.undefined;
    })

    it("Expect correct answer from sum", () => {
        expect(mathEnforcer.sum(5, 5)).to.equal(10);
        expect(mathEnforcer.sum(-5, -5)).to.equal(-10);
        expect(mathEnforcer.sum(-5, 10)).to.equal(5);
        expect(mathEnforcer.sum(2.5, 2)).to.equal(4.5);
    })
})