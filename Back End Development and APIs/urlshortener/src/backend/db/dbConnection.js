const dbConnection = require("mongoose");
dbConnection.connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = dbConnection;