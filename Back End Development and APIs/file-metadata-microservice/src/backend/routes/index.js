const router = require('express').Router();
const controllers = require("../controllers")

router.get("/", controllers.root.get)
router.post("/api/fileanalyse", controllers.api.upload, controllers.api.fileanalysis.post)


module.exports = router;