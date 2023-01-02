const SHORTURL_ID_LENGTH = +process.env.SHORTURL_ID_LENGTH || 7
const allowedCharsRegexp = new RegExp(`^[0-9a-z]{${SHORTURL_ID_LENGTH}}$`);

function isValidShorturlID(shorturlID) {

  if (typeof(shorturlID) !== "string") return false;

  //checking for desired string length via String.length is faster with large strings
  // when compared to just relying on the RegExp
  if (shorturlID.length !== SHORTURL_ID_LENGTH) return false;
  if (allowedCharsRegexp.test(shorturlID) !== true) return false;
  return true;

};



/*

//unused -> RegExp is a lot better readable than below, although below seems to be a bit faster

function hasValidCharacters(shorturlID) {


  for (let i = 0; i < shorturlID.length; i++) {
    //console.log(i, shorturlID.charCodeAt(i))
    //if (shorturlID.charCodeAt(i) !== )
    let charCode = shorturlID.charCodeAt(i);
    if (

      (charCode >= 48 
      && charCode <= 57)
      ||
      (charCode >= 97 
        && charCode <= 122)
    ) {
      continue
    } else {
      return false
    }
  }

  return true

};
*/

module.exports = isValidShorturlID