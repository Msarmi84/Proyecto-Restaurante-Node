var express = require('express');
var router = express.Router();
const uploadImage = require('../middleware/uploadImage')
const controllerDish = require('../controllers/dishController');

// localhost:3000/dish 
router.get('/', controllerDish.seeAllDish);

// localhost:3000/dish/formSpeciality
router.get('/formSpeciality', controllerDish.seeAllChef)

//localhost:3000/dish/saveDish
router.post('/saveDish',uploadImage(),controllerDish.saveDish)

//localhost:3000/dish/deleteDish/:dish_id
router.get('/deleteDish/:dish_id', controllerDish.deleteDish);

//localhost:3000/dish/editDish/:dish_id
router.get('/editDish/:dish_id', controllerDish.editDish);

//localhost:3000/dish/updateDish/:dish_id
router.post('/updateDish/:dish_id', controllerDish.updateDish);

module.exports = router;