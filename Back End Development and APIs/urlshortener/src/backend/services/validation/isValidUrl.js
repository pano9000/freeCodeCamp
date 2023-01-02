const validator = require("validator")

function isValidUrl(url) {

  if (url === undefined) {
    throw new Error("undefined url")
  }

  const validatorResult = validator.isURL(url);
  if (validatorResult !== true) {
    throw new Error("invalid URL")
  }
  return true;
}


module.exports = isValidUrl