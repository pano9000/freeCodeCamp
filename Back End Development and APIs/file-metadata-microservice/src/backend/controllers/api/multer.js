const multer  = require("multer");

const upload = multer({
  strorage: multer.memoryStorage(),
  limits: { fileSize: process.env.MAX_FILESIZE*1e6 }
});

module.exports = upload