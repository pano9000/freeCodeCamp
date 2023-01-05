const router = require('express').Router();
const controllers = require("../controllers")

router.get("/", controllers.rateLimiter.get, controllers.root.get)
router.post("/api/fileanalyse", controllers.rateLimiter.post, controllers.api.upload, controllers.api.fileanalysis.post)


module.exports = router;