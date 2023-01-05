const { showMessage, isValidFile, resetResult } = require("../utils")
const { fieldsetElem, btnSubmit, messageElem, resultsElem } = require("../elements")

function fileInputHandler(event) {

  resetResult(resultsElem);
  fieldsetElem.classList.remove("box_info")
  fieldsetElem.classList.remove("box_ok")
  fieldsetElem.classList.remove("box_error")

  const fileCheck = isValidFile(event.target.files);
  if (fileCheck.valid !== true) {

    fieldsetElem.classList.add("box_error")
    btnSubmit.setAttribute("disabled", "true");
    showMessage(messageElem, fileCheck.message, "error")

  } else {

    fieldsetElem.classList.add("box_ok")
    btnSubmit.removeAttribute("disabled");
    showMessage(messageElem, fileCheck.message, "ok")

  }
};

module.exports = fileInputHandler