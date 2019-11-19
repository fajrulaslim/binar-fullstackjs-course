let express = require('express');
let router = express.Router();

let article_controller = require('../controllers/articleController');

router.get('/', article_controller.index);
router.get('/create', article_controller.create);
router.post('/create_article', article_controller.create_article);
router.get('/detail/:id', article_controller.detail);
router.get('/edit/:id', article_controller.edit);
router.post('/edit_article', article_controller.edit_article);
router.get('/delete/:id', article_controller.delete);

module.exports = router;