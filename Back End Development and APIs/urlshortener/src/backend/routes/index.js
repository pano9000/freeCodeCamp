const express = require('express');
const router = express.Router();

const controllers = require("../controllers")

router.get('/api/hello', controllers.helloGet);
router.post('/api/shorturl', controllers.shorturlPost); 
router.get('/api/shorturl/:shorturlID', controllers.shorturlGet);
router.get('/', controllers.rootGet);

module.exports = router;