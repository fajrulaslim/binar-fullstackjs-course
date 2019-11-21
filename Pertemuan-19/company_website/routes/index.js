var express = require('express');
var router = express.Router();


//requiare controller
var aplication_controller = require('../controllers/applicationController.js');

/* GET home page. */
router.get('/',aplication_controller.home); 
router.get('/about',aplication_controller.about);
router.get('/contact',aplication_controller.contact);

module.exports = router;