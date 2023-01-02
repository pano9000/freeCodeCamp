const { UrlShortenerModel } = require("../../db/dbModels");

function createUrlRecord(url = "", id = "") {
  return new UrlShortenerModel({
    originalUrl: url,
    shortenedUrlId: id
  });
}

module.exports = createUrlRecord