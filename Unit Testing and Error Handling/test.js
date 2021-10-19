const expect = require('chai').expect;
const { isOddOrEven } = require('./module');

describe("isOddOrEven Tests", () => {
    it("Test with invalid input", () => {
        expect(isOddOrEven(3)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });

    it("Test with even input", () => {
        expect(isOddOrEven("even")).to.equal("even");
        expect(isOddOrEven("")).to.equal("even");
    })

    it("Test with odd input", () => {
        expect(isOddOrEven("odd")).to.equal("odd");
    })
})