const dbConnection = require("./dbConnection");
const dbSchema = require("./dbSchema")
const UrlShortenerModel = dbConnection.model("UrlShortenerDoc", dbSchema.urlShortenerSchema);

module.exports = { UrlShortenerModel }