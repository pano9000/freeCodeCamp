const { showMessage, resetResult } = require("../utils")
const { fileInputElem, messageElem, resultsElem } = require("../elements")

function dropHandler(event) {

  event.preventDefault()
  resetResult(resultsElem);
  const fileList = event.dataTransfer.files

  if (fileList !== undefined) {

    if (fileList.length > 1) {
      showMessage(messageElem, "Please only select one file at a time", "error")
      return;
    }

    if (fileList.length === 1) {
      fileInputElem.files = fileList;
      fileInputElem.dispatchEvent(new Event("change"))
    }
  } else {
    showMessage(messageElem, "Something went wrong, please try again", "error")
  }

}

module.exports = dropHandler