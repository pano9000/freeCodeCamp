const form = document.getElementById("url_form");
const input = document.getElementById("url_input");
const hostname = location.hostname;
const baseUrl = `http://${hostname}/api/shorturl`
const modal = document.getElementById("message_modal")
const textField = document.getElementById("url_shortened");
const btnClipboard = document.getElementById("btn_clipboard")

form.addEventListener("submit", submitHandler);
btnClipboard.addEventListener("click", copyToClipboard)

async function submitHandler(event) {
  const element = event.target
  try {
    clipboardStatus("reset");
    element.preventDefault();
    const data = new URLSearchParams({
      url: input.value
    });
    const response = await postToAPI(form.action, data)
    showMessage(response)
  }
  catch(error) {
    clipboardStatus("disabled")
    showMessage({"error": error.message})
  }


};

async function postToAPI(serverUrl, data) {

  try {
    const result = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data.toString()
    })

    if (result.ok !== true) {
      throw new Error()
    }

    const json = await result.json()
    console.log("result", json)

    return json
  }

  catch(error) {
    throw new Error("Creating the shortened URL failed, please try again.")
  }


}

function showMessage(messageData) {

  let textValue = "";
  if(messageData.error !== undefined) {
    textValue = messageData.error
  } else {
    textValue = `${baseUrl}/${messageData.short_url}`;
  }
  textField.value = textValue;
  modal.style.display = "block";

}

function copyToClipboard(event) {

  navigator.clipboard.writeText(textField.value);
  clipboardStatus("copied")

}

function clipboardStatus(mode = "reset") {

  const clipboardData = {
    emoji: "📋",
    title: "Copy to Clipboard",
  }
  btnClipboard.removeAttribute("disabled")

  if (mode === "copied") {
    clipboardData.emoji = "✔️"
    clipboardData.title = "Copied to Clipboard"
  }

  if (mode === "disabled") {
    btnClipboard.setAttribute("disabled", true)
  }


  btnClipboard.innerText = clipboardData.emoji
  btnClipboard.title = clipboardData.title

}