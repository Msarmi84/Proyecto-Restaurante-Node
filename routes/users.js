var express = require('express');
var router = express.Router();
const imageUpload = require('../middleware/uploadImageUser')
const controller = require('../controllers/userController');

// localhost:3000/users
router.get('/', controller.selectAllDishes);

//localhost:3000/users/dish/:id_dish
router.get('/dish/:id_dish', controller.seeOneUser);


//localhost:3000/users/form -> POST
router.post('/form',imageUpload(),controller.saveDish)

//localhost:3000/users/delete/:id_dish
router.get('/deleteDish/:id_dish', controller.deleteDish);


//localhost:3000/users/edit/:id_dish
router.get('/editDish/:id_dish', controller.editDish);


//localhost:3000/users/updateUser/:id_dish
router.post('/updateDish/:id_dish', controller.updateDish);


module.exports = router;

