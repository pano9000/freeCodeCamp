module.exports = {
  submit: require("./submitHandler"),
  drop: require("./dropHandler"),
  fileInput: require("./fileInputHandler"),
  dragover: function dragoverHandler(event) {
    event.preventDefault();
  }
}