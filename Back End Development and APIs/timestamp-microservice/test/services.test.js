const { assert } = require("chai");
const timestamp = require("../src/services/timestamp")

describe("##timestamp.js", () => {

  const dateParams = {
    valid: [ "2021-05-20", "1671577200000", "2022 12 21", "1820 11 23"],
    //invalid: ["abc", "abc def", "abc-123 12 23", "abc-2021-10-11", "2022-34-03"]
    invalid: ["abc", "abc def", "2022-34-03"]

  }

  describe("with valid date param", () => {

    it("should return a object with properties 'unix' and 'utc'", () => {

      dateParams.valid.forEach(validDateParam => {
        const response = timestamp(validDateParam);
        assert.isObject(response);
        assert.property(response, "unix");
        assert.property(response, "utc");

      });

    });

  });

  describe("with invalid date param", () => {

    it("should throw an error", () => {

      dateParams.invalid.forEach(invalidDateParam => {
        assert.throws( () => timestamp(invalidDateParam), "Invalid Date", "", `Param ${invalidDateParam}` )
      });

    });


  });

})