  var passport, setup;

  passport = require('passport');

  setup = function(app, handlers) {
    app.get('/auth/reset/password/:token', handlers.session.resetPassword);
    app.get('/auth/facebook/go', passport.authenticate('facebook', {
      scope: 'email'
    }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
      successRedirect: '/#',
      failureRedirect: '/#login'
    }));
    app.post('/rest/user/login', passport.authenticate('local'), handlers.session.login);
    app.post('/rest/user/forgot', handlers.session.forgot);
    app.post('/rest/user/reset', handlers.session.reset);
    app.post('/rest/user/register', handlers.register.submit);
    app.get('/rest/user/activity', handlers.session.activity);
    app.get('/rest/user/logout', handlers.session.logout);
    app.get('/rest/user/auth', handlers.session.auth);
    app.get("/rest/getSentences", handlers.sentence.findAll);  
  };

  exports.setup = setup;
