var express = require('express');
var router = express.Router();


//requiare controller
var client_controller = require('../controllers/clientController.js');
var aplication_controller = require('../controllers/applicationController.js');

/* GET home page. */
router.get('/',aplication_controller.home); 
router.get('/about',aplication_controller.about);
router.get('/contact',aplication_controller.contact);
router.get('/testimonial',aplication_controller.testimonial);
router.get('/cats',aplication_controller.cats);

module.exports = router;