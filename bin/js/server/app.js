  var MongoSession, app, config, express, expressValidator, handlers, mongoose, passport, routes, start;

  express = require('express');

  mongoose = require('mongoose');

  passport = require('passport');

  expressValidator = require('express-validator');

  config = require('./config');

  routes = require('./routes');

  handlers = require('./handlers');

  MongoSession = require('connect-mongo')(express);

  app = express();

  app.disable('x-powered-by');

  app.configure(function() {
    var oneDay;

    oneDay = 86400000;
    app.use(express.compress());
    app.use(express["static"]('public', {
      maxAge: oneDay
    }));
    app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(expressValidator());
    app.use(express.session({
      secret: 'Sdf098jJH89hG690jgG6g',
      store: new MongoSession({
        url: config.dbUrl
      })
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
  });

  start = function() {
    routes.setup(app, handlers);
    app.listen(config.port, function() {
      console.log("connected on port " + config.port);
    });
    mongoose.connect(config.dbUrl, {
      db: {
        safe: true
      }
    }, function(error) {
      if (error) {
        console.log("mongoose connection ERROR: " + error);
      } else {
        console.log('mongoose connected');
      }
    });
  };

  exports.app = app;

  exports.start = start;
