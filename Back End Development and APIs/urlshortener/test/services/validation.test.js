const { assert } = require("chai")
const isValidShorturlID = require("../../src/backend/services/validation/isValidShorturlID")
const isValidUrl = require("../../src/backend/services/validation/isValidUrl")


describe("##isValidShorturlID", () => {

  //assuming 7 characters as valid length
  const testIDs = {
    valid: ["1234567", "abcdefg", "a1b2c3d", "1a2b3c4", "9m64zfv"],
    invalid: ["12345678", "abcdefgh", "abc", "a+bcdef", "a-12+bc"]
  }

  describe("with invalid shorturlIDs", () => {

    it("should return false", () => {

      testIDs.invalid.forEach( invalidElement => {
        const result = isValidShorturlID(invalidElement);
        assert.isFalse(result, `element '${invalidElement}' is '${result}'`);
      });

    })

  });

  describe("with valid shorturlIDs", () => {

    it("should return true", () => {


      testIDs.valid.forEach( validElement => {
        const result = isValidShorturlID(validElement);
        assert.isTrue(result, `element '${validElement}' is '${result}'`);
      });

    })

  });


});

describe("##isValidUrl", () => {
  const testURLs = {
    valid: ["https://test.de", "https://google.com/test/wat/"],
    invalid: ["abc def", "https://bb b.de", "...", undefined, null]
  }

  describe("with valid URLs", () => {

    it("should return true", () => {
      testURLs.valid.every(url => assert.isTrue(isValidUrl(url)))
    })
  })

  describe("with invalid URLs", () => {

    it("should throw an error", () => {
      testURLs.valid.every(url => assert.isTrue(isValidUrl(url)))
      testURLs.invalid.forEach(invalidUrl => assert.throws( () => isValidUrl(invalidUrl) ) )

    })
  })

})