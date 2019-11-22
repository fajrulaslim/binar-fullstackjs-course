var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
// parser
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientRouter = require('./routes/clients');
var articleRouter = require('./routes/articles');
var apiArticleRouter = require('./routes/api/articles');

var app = express();

// set database connection
var mongo_db_url = 'mongodb+srv://aslim_db:3qTJlMwPM73YX8TA@cluster0-gm4tr.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongo_db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
  console.log('Success connect to database! yeay!');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientRouter);
app.use('/articles', articleRouter);
app.use('/api/articles', apiArticleRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
