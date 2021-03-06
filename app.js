
/**
 * Definitions
 */


/**
 * Module dependencies.
 */

var express = require('express')
  , less = require('less')
  , reCaptcha = require('recaptcha-async')
  , routes = require('./routes')
  , apiRoute = require('./routes/api.js');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});
app.register('.html',require('jade'));

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/loginbox', routes.loginbox);
app.get('/:shortcut', apiRoute.router);
app.get('/', apiRoute.index);
app.get('/index', routes.index);
app.get('/login', routes.login);
app.get('/register', routes.register);
app.get('/home', routes.home);
app.get('/go/:shortcut', apiRoute.router);
app.post('/api/:signature', apiRoute.api);

/*

*/

app.listen(3000, "127.0.0.1");
console.log("Express server listening on port %d in %s mode", app.address(), app.settings.env);
