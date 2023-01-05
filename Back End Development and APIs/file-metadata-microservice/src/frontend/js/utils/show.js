function showMessage(element, message, status) {

  element.innerText = message;
  element.classList.add("message", (status === "ok") ? "message_ok" : "message_error");

  if (status === "ok") {
    element.classList.replace("message_error", "message_ok")
  } else {
    element.classList.replace("message_ok", "message_error")
  }

  element.style.opacity = 1;

  // harder to read than the if/else above?
  //const statusOK = (status === "ok");
  //element.classList.replace(((statusOK) ? "message_error" : "message_ok" ), ((statusOK) ? "message_ok" : "message_error" ))

}

function showResult(response, parentElement, childElements ) {

  parentElement.style.display = "grid"
  showMessage(childElements.resultName, response.name, "ok")
  showMessage(childElements.resultType, response.type, "ok")
  showMessage(childElements.resultSizeBytes, `${response.size} Bytes`, "ok");
  showMessage(childElements.resultSizeKb, `${(response.size / 1e3).toFixed(2)} KB`, "ok");
  showMessage(childElements.resultSizeMb, `${(response.size / 1e6).toFixed(2)} MB`, "ok");

}

function resetResult(parentElement) {
  parentElement.style.display = "none"
}

function showError(element, errorResponse) {
  element.style.display = "block";
  showMessage(element, `Something went wrong: ${errorResponse}. Please try again later`, "error")

}

module.exports = {
  showMessage,
  showResult,
  showError,
  resetResult
}