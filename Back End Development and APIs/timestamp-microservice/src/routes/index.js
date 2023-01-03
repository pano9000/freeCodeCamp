const router = require('express').Router();

const controllers = require("../controllers")


router.get("/", controllers.root.get)
router.get("/api/hello", controllers.api.hello.get)
router.get("/api/:date?", controllers.api.date.get)


module.exports = router;