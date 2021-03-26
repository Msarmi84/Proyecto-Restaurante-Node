var express = require('express');
var router = express.Router();
const imageUpload = require('../middleware/uploadImage')
const controller = require('../controllers/indexController');

// localhost:3000/
router.get('/', controller.seeAllChef);

//localhost:3000/ 
router.post('/',imageUpload(),controller.saveChef)

//localhost:3000/seeChef/:chef_id' 
router.get('/seeChef/:chef_id', controller.seeOneChef);

//localhost:3000/deleteChef/:chef_id
router.get('/deleteChef/:chef_id', controller.deleteChef);

// localhost:3000/login
router.get('/login', controller.viewForm);

// localhost:3000/login
router.post('/login', controller.login);



module.exports = router;



