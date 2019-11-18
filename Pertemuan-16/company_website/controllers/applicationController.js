let Cat = require('../models/cat.js');

exports.home = function(req, res, next){
    res.render('index', {
        title: 'Belajar Express',
        author: 'Fajrul'
    })
}

exports.about = function(req, res, next){
    res.render('home/about');
}

exports.contact = function(req, res, next){
    res.render('home/contact');
}

exports.cats = function(req, res, next) {
  Cat.find({}, function(err, results) {
    res.render('cats', {
      data: results 
    });
  });
}