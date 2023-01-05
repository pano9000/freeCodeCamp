const show = require("./show")

module.exports = {
  isValidFile: require("./isValidFile"),
  postToAPI: require("./postToAPI"),
  showMessage: show.showMessage,
  showResult: show.showResult,
  showError: show.showError,
  resetResult: show.resetResult,
  loadingSpinner: show.loadingSpinner
}