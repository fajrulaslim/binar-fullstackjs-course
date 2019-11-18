let Article = require('../models/article');

exports.index = function(req, res, next){
    Article.find({}, function(err, results){
        if(err) throw err;
        res.render('articles/index', { 
            data: results 
        });
    })    
}

exports.create = function(req, res, next){
   res.render('articles/create'); 
}

exports.create_article = function(req, res, next){
    // let title = req.body.title;
    // let author = req.body.author;
    // let description = req.body.description;

    // res.send('Create Article <br> - title: ' + title + '<br> - author: ' + author + '<br> - description: ' + description); 

    let article = new Article(req.body);
    
    // insert data to database
    article.save(function(err, results){
        if(err){
            console.log(err.message);
        } else {
            console.log(req.body);
            res.redirect('/articles');
        }
    })
 }

