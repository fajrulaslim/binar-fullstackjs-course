var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var clientRouter = require('./routes/clients');

var app = express();

// set database connection
var mongo_db_url = 'mongodb+srv://aslim_db:3qTJlMwPM73YX8TA@cluster0-gm4tr.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongo_db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('Success connect to database! yeay!');
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clients', clientRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// let Client = require('./models/client.js');
//   let bambang = new Client({
//       name: 'Aslim',
//       address: 'Ampang, Pasang',
//       total_project: 99,
//       status: 'Done'
//   })
//   bambang.save(function(err, bambang){
//       if(err) return console.log(err.message);
//       console.log('Success create client!');
//   })

module.exports = app;
