const findUrlRecord = require("../services/db/findUrlRecord");
const isValidShorturlID = require("../services/validation/isValidShorturlID")


async function shorturlGet(req, res) {

  const { shorturlID } = req.params;

  try {

    if (isValidShorturlID(shorturlID) !== true) {
      res.status(400).json( {error: "invalid shorturl"} );
      return;
    }

    const idCheckResult = await findUrlRecord.byId(shorturlID);

    if (idCheckResult === null || idCheckResult === undefined) {
      res.redirect(404, "/");
      return;
    }

    res.redirect(301, idCheckResult.originalUrl)
    return;

  }
  catch(error) {
    res.status(500).json( {error: "checking for the ID failed"} );
    return;
  }

}



module.exports = shorturlGet