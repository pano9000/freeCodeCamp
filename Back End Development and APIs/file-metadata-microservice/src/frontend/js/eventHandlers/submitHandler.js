const { showResult, showError, postToAPI } = require("../utils")
const {
  resultsElem,
  resultName,
  resultType,
  resultSizeBytes,
  resultSizeKb,
  resultSizeMb } = require("../elements")


async function submitHandler(event) {
  const element = event.target;
  event.preventDefault()
  const serverUrl = element.form.action;
  console.log(element)

  const formData = new FormData(element.form)

  try {
    const response = await postToAPI(serverUrl, formData);

    const resultChildElems = {
      resultName,
      resultType,
      resultSizeBytes,
      resultSizeKb,
      resultSizeMb,
    }

    console.log("subhad", response, resultsElem)
    showResult(response, resultsElem, resultChildElems)

  } catch(error) {
    console.log("yooo", error)
    showError(resultsElem, error.message)
  }

}

module.exports = submitHandler