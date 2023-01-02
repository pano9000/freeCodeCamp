const express = require("express");
const app = express();

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
  let k = req.params.date.split("-");
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
    let ooo = new Date(k.join("-"))
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
