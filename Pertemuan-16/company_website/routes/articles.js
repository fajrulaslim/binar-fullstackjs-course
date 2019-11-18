let express = require('express');
let router = express.Router();

let article_controller = require('../controllers/articleController');

router.get('/', article_controller.index);
router.get('/create', article_controller.create);
router.post('/create_article', article_controller.create_article);

module.exports = router;