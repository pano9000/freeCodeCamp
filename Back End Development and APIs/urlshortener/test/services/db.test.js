const { assert } = require("chai");
const createUrlRecord = require("../../src/backend/services/db/createUrlRecord");


describe("#createUrlRecord", () => {

  describe("with no arguments", () => {

    it("should return an object with the correct properties and empty string values", () => {

      const urlRecord = createUrlRecord();
      assert.property(urlRecord,"originalUrl")
      assert.property(urlRecord,"shortenedUrlId")
      assert.propertyVal(urlRecord, "originalUrl", "")
      assert.propertyVal(urlRecord, "shortenedUrlId", "")
    })

  })

  describe("with an URL argument only", () => {

    it("should return an object with the correct properties and the URL as string value", () => {
      const url = "https://test.com"
      const urlRecord = createUrlRecord(url);
      assert.property(urlRecord,"originalUrl")
      assert.property(urlRecord,"shortenedUrlId")
      assert.propertyVal(urlRecord, "originalUrl", url)
      assert.propertyVal(urlRecord, "shortenedUrlId", "")
    })

  })



});