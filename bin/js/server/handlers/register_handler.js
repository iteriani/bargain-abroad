const UserDao = require('../daos/user_dao');
const User = require('../models/user');
const errors = require('../errors');
const async = require('async');

module.exports = {

    error: function(response, error) {
        if (error.code === 11000) {
            console.error(error);
            response.send(404, {
                errors: {
                    exists: {
                        message: errors.user.alreadyExists
                    }
                }
            });
        } else {
            response.send(error, 404);
        }
    },

    submit: function(request, response) {
        var pass, pazz, user;

        pass = request.body.password;
        pazz = request.body.pazzword;

        if (pass && pazz && pass === pazz) {
            user = new User(request.body);
            UserDao.callUserMethods(user, ['validate', 'hashPassword', 'save'], function(error) {
                if (error) {
                    response.send(error, 404);
                } else {
                    request.login(user, function(error) {
                        if (error) {
                            this.error(response, error);
                        } else {
                            response.redirect('/rest/user/auth');
                        }
                    });
                }
            });
        } else {
            this.error(response, errors.user.passwordsDontMatch);
        }
    }
};
