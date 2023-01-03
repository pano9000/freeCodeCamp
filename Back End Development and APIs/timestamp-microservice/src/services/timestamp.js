function dateFunct(dateParam) {

  console.log("******datefunc start ******", Date.now())

  if (dateParam === undefined) {
    const dateNow = new Date();
    console.log(dateNow)
    const response = {
      "unix": dateNow.valueOf(),
      "utc": dateNow.toUTCString()
    }
    return response;
  }

  console.log("reqparams", dateParam, Date.now());
  const splitRegExp = /\s|-/g
  let k = dateParam.split(splitRegExp);
  console.log("k", k, k.length, k.length === 1, Date.now())

  if (k.length === 1) {
    let ooo = new Date(parseInt(k[0]))
    console.log("ooo", ooo, Date.now())

    if (isNaN(ooo.valueOf())) {
      const response = {
        "error": "Invalid Date"
      }
      return response;
    }

    const response = {
      "unix": ooo.valueOf(),
      "utc": ooo.toUTCString()
    }
    return response;

  } else if (k.length > 1) {
    console.log(k.join("-"))
    let ooo = new Date(k.join(" "))
    console.log("ooo in else", ooo, ooo === null, typeof(ooo.valueOf()), ooo.valueOf())
    if (isNaN(ooo.valueOf())) {
      const response = {
        "error": "Invalid Date"
      }
      return response;
    }
    const response = {
      "unix": ooo.valueOf(),
      "utc": ooo.toUTCString()
    }
    return response;
  }

}

function response(unix, utc) {

}

module.exports = dateFunct