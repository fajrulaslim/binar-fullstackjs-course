let express = require('express');
let router = express.Router();

let client_controller = require('../controllers/clientController');

router.get('/', client_controller.index);
router.get('/create', client_controller.create);

module.exports = router;