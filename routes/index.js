var express = require('express');
var router = express.Router();
const imageUpload = require('../middleware/uploadImageUser')
const controller = require('../controllers/indexController');



// localhost:3000/
router.get('/', controller.seeAllDish);

//localhost:3000/ -> POST
router.post('/',imageUpload(),controller.saveDish)

module.exports = router;



