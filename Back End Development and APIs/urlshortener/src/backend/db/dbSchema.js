const dbConnection = require("./dbConnection");

const urlShortenerSchema = new dbConnection.Schema({
  originalUrl: { type: String, required: true, unique: true },
  shortenedUrlId: { type: String, required: true, unique: true },
})


module.exports = { urlShortenerSchema }