const router = require('express').Router();
const controllers = require("../controllers")

router.get("/", controllers.root.get)
router.post("/api/fileanalysis", controllers.api.upload.single("upfile"), controllers.api.fileanalysis.post)


module.exports = router;