    var User, async, config, errors, moment, utils;

    async = require('async');

    utils = require('../utils');

    config = require('../config');

    errors = require('../errors');

    moment = require('moment');

    User = require('../models/user');

    module.exports = {
        getUserByQuery: function(query, callback) {
            User.findOne(query, function(error, user) {
                if (error) {
                    callback(error);
                } else if (user) {
                    callback(null, user);
                } else {
                    callback(errors.user.notFound);
                }
            });
        },
        getUserByEmail: function(email, callback) {
            this.getUserByQuery({
                email: email
            }, callback);
        },
        getUserByToken: function(token, callback) {
            this.getUserByQuery({
                token: token
            }, callback);
        },
        getUserActivity: function(user, callback) {
        },
        getUserPoints: function(user, callback) {
        },
        getUserProfile: function(user, mainCallback) {
        },
        setResetPasswordToken: function(user, callback) {
            user.token = utils.randomHash(64);
            user.save(callback);
        },
        setNewPassword: function(user, value, callback) {
            user.password = value;
            user.token = null;
            async.series([user.hashPassword.bind(user), user.save.bind(user)], callback);
        },
        callUserMethods: function(user, methods, callback) {
            var run;

            run = function(method, cb) {
                user[method](cb);
            };
            async.mapSeries(methods, run, callback);
        }
    };
