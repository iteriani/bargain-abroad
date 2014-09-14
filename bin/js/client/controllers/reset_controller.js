// Generated by CoffeeScript 1.6.2
(function() {
  var PASS_LEN;

  PASS_LEN = 6;

  App.ResetController = Ember.ObjectController.extend({
    errors: null,
    messages: null,
    hasToken: false,
    loading: false,
    token: null,
    pass: null,
    pazz: null,
    init: function() {
      this._super();
      this.setProperties({
        errors: [],
        messages: []
      });
    },
    actions: {
      cancel: function() {
        var e;

        try {
          history.go(-1);
        } catch (_error) {
          e = _error;
          this.transitionTo('index');
        }
      },
      submit: function() {
        var data,
          _this = this;

        data = this.getProperties('token', 'pass', 'pazz');
        if (data.token) {
          if (data.pass && data.pass.length) {
            if (data.pass === data.pazz) {
              this.setProperties({
                loading: true,
                errors: [],
                messages: []
              });
              $.ajax({
                type: 'POST',
                data: data,
                url: '/rest/user/reset',
                success: function() {
                  _this.set('loading', false);
                  _this.get('messages').pushObject('Your password has been reset.');
                },
                error: function(error) {
                  _this.set('loading', false);
                  _this.get('errors').pushObject(error.responseText);
                }
              });
            } else {
              this.get('errors').pushObject('Passwords do not match');
            }
          } else {
            this.get('errors').pushObject('Password missing');
          }
        } else {
          this.get('errors').pushObject('Invalid Token');
        }
      }
    }
  });

}).call(this);
