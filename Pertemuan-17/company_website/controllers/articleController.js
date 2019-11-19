let Article = require('../models/article');

exports.index = function (req, res, next) {
    Article.find({}, function (err, results) {
        if (err) throw err;
        res.render('articles/index', {
            title: 'List Articles',
            data: results
        });
    })
}

exports.create = function (req, res, next) {
    res.render('articles/create', { title: 'Create Article' });
}

exports.create_article = function (req, res, next) {
    let article = new Article(req.body);

    // insert data to database
    article.save(function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log(req.body);
            res.redirect('/articles');
        }
    })
}

exports.detail = function (req, res, next) {
    let id = req.params.id;
    Article.findOne({ _id: id }, function (err, results) {
        if (err) throw err;
        res.render('articles/detail', {
            title: 'Detail Article',
            data: results
        });
    })
}

exports.edit = function (req, res, next) {
    let id = req.params.id;
    Article.findOne({ _id: id }, function (err, results) {
        if (err) throw err;
        res.render('articles/edit', {
            title: 'Edit Article',
            data: results
        });
    })
}

exports.edit_article = function (req, res, next) {
    let myquery = { _id: req.body._id };
    let newvalues = {
        $set: {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        }
    };

    // insert data to database
    Article.updateOne(myquery, newvalues, function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            res.redirect('/articles');
        }
    })
}

exports.delete = function (req, res, next) {
    let id = req.params.id;
    Article.deleteOne({ _id: id }, function (err, results) {
        if (err) {
            console.log(err.message);
        } else {
            console.log('Data berhasil dihapus!');
            res.redirect('/articles');
        }
    })
}

