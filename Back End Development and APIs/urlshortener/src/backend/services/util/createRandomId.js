
function createRandomId(length = process.env.SHORTURL_ID_LENGTH || 7) {

  const utf16Range = {
    decimal: {
      min: 48,
      max: 57
    },
    latin: {
      min: 97,
      max: 122
    }
  }

  const randomId = [];

  for (let i = 0; i < length; i++) {
    const randomCharCode = getRandomCharCode([ utf16Range.decimal, utf16Range.latin ]);
    randomId.push(String.fromCharCode(randomCharCode));
  }

  return randomId.join("");
}


/**
 * 
 * @param {Array<{min: Int, max: Int}>} decimalRanges 
 * @returns 
 */
function getRandomCharCode(decimalRanges) {
  const randomRangeIndex = Math.floor(Math.random() * (decimalRanges.length - 0) + 0);
  const range = decimalRanges[randomRangeIndex]
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

module.exports = { createRandomId, getRandomCharCode }
