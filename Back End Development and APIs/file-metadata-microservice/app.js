const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const routes = require("./src/backend/routes")

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use("/", routes);


module.exports = app