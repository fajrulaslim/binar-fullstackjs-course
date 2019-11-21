let Cat = require('../models/cat.js');

exports.home = function (req, res, next) {
  res.render('index', {
    title: 'Learning Express JS',
    author: 'Fajrul'
  })
}

exports.about = function (req, res, next) {
  res.render('home/about', { title: 'About' });
}

exports.contact = function (req, res, next) {
  res.render('home/contact', { title: 'Contact' });
}

exports.cats = function (req, res, next) {
  Cat.find({}, function (err, results) {
    res.render('cats', {
      data: results
    });
  });
}