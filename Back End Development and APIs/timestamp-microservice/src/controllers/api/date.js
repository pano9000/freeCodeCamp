const dateFunc = require("../../services/timestamp")

function dateGet(req, res) {

  try {
    const response = dateFunc(req.params.date)
    res.status(200).json(response);
    return;

  } catch(error) {
    console.log(error.message);
    res.status(200).json({"error": error.message});
    return;

  }

}

module.exports = dateGet