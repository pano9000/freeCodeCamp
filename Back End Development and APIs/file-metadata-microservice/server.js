const app = require("./app")

const port = process.env.PORT || 3007;

const listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});