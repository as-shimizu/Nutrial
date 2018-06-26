var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var pg = require('pg');
var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
var dbConnect = require('./conf/dbConfig');

var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var topRouter = require('./routes/top');
var logoutRouter = require('./routes/logout');
var createDayRouter = require('./routes/createDay');
var confirmDayRouter = require('./routes/confirmDay');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
    store : new pgSession({
        pg : pg,
        conString : dbConnect.dbConnectStr,
        ttl : 1800,
        pruneSessionInterval : 60
    }),
    secret : 'secret',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 60 * 60 * 1000
    }
}));

app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/top', topRouter);
app.use('/logout', logoutRouter);
app.use('/createDay', createDayRouter);
app.use('/confirmDay', confirmDayRouter);

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

module.exports = app;
