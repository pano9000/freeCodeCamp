const { createRandomId } = require("../util/createRandomId")


async function saveUrlRecord(urlRecord) {

  let attempts = 0;
  while ( attempts < 3 ) {
    try {
      attempts++;
      urlRecord.shortenedUrlId = createRandomId();
      const saveResult = await urlRecord.save();

      if (saveResult) {
        return saveResult;
      }

    }

    catch(error) {
      if (attempts === 3) {
        throw new Error("saving failed, after 3 attempts")
      }
    }
  }

}

module.exports = saveUrlRecord