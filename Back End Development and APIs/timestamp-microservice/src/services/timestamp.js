function dateFunct(dateParam) {

  if (dateParam === undefined) {
    return createDateResponse()
  }

  const splitRegExp = /\s|-/g
  const splitDateParam = dateParam.split(splitRegExp);
  const dateFromParam = ( splitDateParam.length === 1 ) ? new Date( +splitDateParam[0] ) : new Date(splitDateParam.join(" "))

  if (dateFromParam === undefined || isNaN(dateFromParam.valueOf())) {
    throw new Error("Invalid Date");
  }

  return createDateResponse(dateFromParam.valueOf())
}


function createDateResponse(unixDate = Date.now()) {

  return {
    "unix": unixDate,
    "utc": (new Date(unixDate)).toUTCString()
  }

}

module.exports = dateFunct