// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


const dateFunct = (req, res, next) => {
  console.log("******datefunc start ******", Date.now())
  if (req.params.date === undefined) {
    const dateNow = new Date();
    console.log(dateNow)
    req.app.date = {
        "unix": dateNow.valueOf(),
        "utc": dateNow.toUTCString()
    }
  next();
}
  console.log("reqparams", req.params.date, Date.now());
  const splitRegExp = /\s|-/g
  let k = req.params.date.split(splitRegExp);
  console.log("k", k, k.length, k.length === 1, Date.now())

  if (k.length === 1) {
    let ooo = new Date(parseInt(k[0]))
    console.log("ooo", ooo, Date.now())

    if (isNaN(ooo.valueOf())) {
      req.app.date = {
        "error": "Invalid Date"
      }
      next();
    }

    req.app.date = {
      "unix": ooo.valueOf(),
      "utc": ooo.toUTCString()
    }
  
    next();
  } else if (k.length > 1) {
    console.log(k.join("-"))
    let ooo = new Date(k.join(" "))
    console.log("ooo in else", ooo, ooo === null, typeof(ooo.valueOf()), ooo.valueOf())
    if (isNaN(ooo.valueOf())) {
      req.app.date = {
        "error": "Invalid Date"
      }
      next();
    }
    req.app.date = {
      "unix": ooo.valueOf(),
      "utc": ooo.toUTCString()
    }
    next();
  }

}

app.get("/", (req, res) => {
    res.send("ok");
  }
);

app.get("/api/:date?", dateFunct, (req, res) => {
    console.log("in app.get", req.app.date)
    res.json(req.app.date);
  }
);



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});