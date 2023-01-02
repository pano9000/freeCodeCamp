require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/backend/routes');
const app = express();
//const bodyParser = require('body-parser');


// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(`${process.cwd()}/public`));
app.use('/', routes);



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
