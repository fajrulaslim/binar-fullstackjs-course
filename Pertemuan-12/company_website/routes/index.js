var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    author: 'fajrulaslim' 
  });
});

router.get('/about', function(req, res, next) {
  res.render('home/about');
});

router.get('/contact', function(req, res, next) {
  res.render('home/contact');
});

router.get('/testimonials', function(req, res, next) {
  res.render('home/testimonials');
});

module.exports = router;
