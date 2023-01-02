const { assert } = require("chai");
const { createRandomId } = require("../../src/backend/services/util/createRandomId");
const { getRandomCharCode } = require("../../src/backend/services/util/createRandomId");;

describe("##getRandomCharCode", () => {

  const utf16Range = {
    decimal: {
      min: 48,
      max: 57
    },
    latin: {
      min: 97,
      max: 122
    }
  }

  describe("with the utf16Range.decimal, utf16Range.latin range as args", () => {

    const randomCharCodes = [];
    for (let i=0; i<500; i++) {
      randomCharCodes.push(getRandomCharCode([ utf16Range.decimal, utf16Range.latin ]));
    }

    it("should be a number", () => {
      randomCharCodes.every(element => assert.isNumber(element))
    })

    it("should be within the range of the supplied range", () => {

      randomCharCodes.every(element => assert.isTrue(
        ((element >= utf16Range.decimal.min && element <= utf16Range.decimal.max)
        || (element >= utf16Range.latin.min && element <= utf16Range.latin.max))
        )
      );
    })


  });

});


describe("##createRandomId", () => {

  describe("with no argument", () => {
    const randomIds = [];
    for (let i=0; i<500; i++) {
      randomIds.push(createRandomId());
    }

    it("should be a string", () => {
      randomIds.every(id => assert.isString(id));
    });

    it("should have a default length of 7", () => {
      randomIds.every(id => assert.lengthOf(id, 7));

    });
  });

  describe("with argument of '5'", () => {
    const randomIds = [];
    for (let i=0; i<500; i++) {
      randomIds.push(createRandomId(5));
    }

    it("should be a string", () => {
      randomIds.every(id => assert.isString(id));
    });

    it("should have a length of 5", () => {
      randomIds.every(id => assert.lengthOf(id, 5));

    });
  });

});