const dateFunc = require("../../services/timestamp")

function dateGet(req, res) {


  const response = dateFunc(req.params.date)

  console.log("in app.get", response)
  res.json(response);

}

module.exports = dateGet