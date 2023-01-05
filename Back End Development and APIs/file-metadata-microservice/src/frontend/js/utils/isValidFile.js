const MAX_FILESIZE = 10_000_000 // equivalent to 10e6/10^6 bytes or 10MB

const check = function(status, message) {
  return {
    valid: status,
    message: message
  }
}

/**
 * 
 * @param {FileList} File API File object 
 */
function isValidFile(fileList) {

  if (fileList === undefined || fileList.length == 0) {
    return check(false, "No file found")
  }

  // we only support single files, so just take the first object from the array
  const [file] = fileList;

  if (file.size > MAX_FILESIZE) {
    return check(false, "The file size exceeds the file limit")
  }

  return check(true, "All OK")

}

module.exports = isValidFile