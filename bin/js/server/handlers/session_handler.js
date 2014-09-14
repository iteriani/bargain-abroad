const async = require('async');
const errors = require('../errors');

module.exports = {

    auth: function(request, response) {
      if (request.user) {
        response.json(request.user.toResponseObject());
      } else {
        response.send(401);
      }
    },

    login: function(request, response) {
        response.json(request.user.toResponseObject());
    },

    logout: function(request, response) {
      request.logout();
      response.send(200);
    },

    activity: function(request, response) {
      if (request.user) {
          response.json([]);
      } else {
          response.send(401);
      }
    },

    forgot: function(request, response) {
        this.error(response, 'Invalid Request');
    },

    reset: function(request, response) {
        this.error(response, 'Invalid Request');
    },

    resetPassword: function(request, response) {
        this.error(response, 'Invalid Request');
    }

};
