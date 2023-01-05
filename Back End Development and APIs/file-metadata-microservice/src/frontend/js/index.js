const eventHandlers = require("./eventHandlers/");
const { 
  btnSubmit,
  dragdropElem,
  fileInputElem } = require("./elements");

btnSubmit.addEventListener("click", eventHandlers.submit);
dragdropElem.addEventListener("drop", eventHandlers.drop);
dragdropElem.addEventListener("dragover", eventHandlers.dragover);
fileInputElem.addEventListener("change", eventHandlers.fileInput);