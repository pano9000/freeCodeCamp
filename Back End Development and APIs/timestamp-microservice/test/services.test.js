const { assert } = require("chai");
const timestamp = require("../src/services/timestamp")

describe("##timestamp.js", () => {

  const dateParams = {
    valid: [ "2021-05-20", "1671577200000", "2022 12 21", "1820 11 23", "05 October 2011, GMT"],
    invalid: ["abc", "abc def", "2022-34-03"]

    // these feel like invalid, but JS' Date() for some reason can handle them, so let's just live with that
    //invalid: ["abc", "abc def", "abc-123 12 23", "abc-2021-10-11", "2022-34-03"]

  }

  describe("with valid date param", () => {

    it("should not throw an error", () => {
      dateParams.valid.forEach(validDateParam => {
        assert.doesNotThrow( () => timestamp(validDateParam), "Invalid Date", "", `Param '${validDateParam}' threw an error` )
      });
    });

    it("should return a object with properties 'unix' and 'utc'", () => {

      dateParams.valid.forEach(validDateParam => {
        const response = timestamp(validDateParam);
        assert.isObject(response);
        assert.notProperty(response, "error", `Param '${validDateParam}' should return as valid`)
        assert.property(response, "unix");
        assert.property(response, "utc");

      });

    });

  });

  describe("with invalid date param", () => {

    it("should throw an error", () => {

      dateParams.invalid.forEach(invalidDateParam => {
        assert.throws( () => timestamp(invalidDateParam), "Invalid Date", "", `Param '${invalidDateParam}' should throw an error` )
      });

    });


  });

})