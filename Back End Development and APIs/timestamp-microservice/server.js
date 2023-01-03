const app = require("./app")

const port = process.env.PORT || 3006;


// listen for requests :)
const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});