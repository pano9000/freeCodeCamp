const multer  = require("multer");

const upload = multer({
  strorage: multer.memoryStorage(),
  limits: { fileSize: process.env.MAX_FILESIZE*1e6 }
}).single(process.env.FORM_FILE_FIELDNAME);



function uploadHandling(req, res, next) {

  upload(req, res, (error) => {

    if (error instanceof multer.MulterError) {
      res.status(400).send({ "error": error.message })
      return;
    }

    next()
  })

}

module.exports = uploadHandling