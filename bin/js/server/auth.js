  var FB_ERROR, User, config, passport, passport_facebook, passport_local, url;

  FB_ERROR = 'Looks like we could not log you in via Facebook at this moment. We apologize for the inconvenience. Please try again in a few moments. If the problem continues, contact the administrator.';

  config = require('./config');

  passport = require('passport');

  passport_local = require('passport-local');

  passport_facebook = require('passport-facebook');

  User = require('./models/user');

  passport.use(new passport_facebook.Strategy(config.fb, function(accessToken, refreshToken, profile, done) {
    var e, email, save;

    save = function(user, isNew) {
      if (isNew == null) {
        isNew = false;
      }
      user.save(function(error) {
        if (error) {
          console.error(error);
          done(FB_ERROR);
        } else {
          done(null, user);
          if (isNew) {
              // do something if new user
          }
        }
      });
    };
    try {
      email = profile._json.email;
      User.findOne({
        email: email
      }, function(error, user) {
        if (error) {
          console.error(error);
          done(FB_ERROR);
        } else if (user) {
          if (user.isFacebook) {
            done(null, user);
          } else {
            user.facebook = profile._json;
            save(user);
          }
        } else {
          user = new User({
            facebook: profile._json,
            email: email
          });
          save(user, true);
        }
      });
    } catch (_error) {
      e = _error;
      console.error(e);
      done(FB_ERROR);
    }
  }));

  passport.use(new passport_local.Strategy(function(username, password, done) {
    User.findOne({
      email: username
    }, function(error, user) {
      if (error) {
        return done(error);
      }
      if (!user) {
        return done(null, false, 'There was an error.');
      }
      return user.checkPassword(password, function(error, result) {
        if (result) {
          return done(null, user);
        }
        if (error) {
          return done(error);
        }
        return done(null, false);
      });
    });
  }));

  passport.serializeUser(function(user, done) {
    console.log('serializeUser', user);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    console.log('deserializeUser', id);
    User.findById(id, function(error, user) {
      if (error) {
        return done(error);
      }
      if (user) {
        return done(null, user);
      }
      console.error('deserializeUser', id);
      return done('An error has occured');
    });
  });
