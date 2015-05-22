var express = require('express');
//var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var routes = require('./routes/index');
//var users = require('./routes/users');

  // , http = require('http')

var app = express()
 , http = require('http').createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening port %d', app.get('port'));
})
  , io = require('socket.io').listen(http)
  , routes = require('./routes/index')
  , users = require('./routes/users')
  , seats = require('./routes/seats')
  , path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.locals.basedir = app.get('views');

app.use('/', routes);
app.use('/users', users);
app.use('/seats', seats);

console.log('Port : ' + app.get('port'));

// // 서버 실행
// var httpServer = http.createServer(app).listen(3000, function() {
//   console.log('Express server listening port %d', app.get('port'));
// });
// var io = require('socket.io').listen(httpServer);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// 소켓 서버 실행
io.sockets.on('connetion', function(socket) {
  console.log('socket connected!!!');
  socket.on('reserve', function (data) {
    seats[data.y][data.x] = 2;
    io.sockets.emit('reserve', data);
  });
});

module.exports = app;
