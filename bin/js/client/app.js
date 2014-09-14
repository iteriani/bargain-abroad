  Ember.TextSupport.reopen({
    attributeBindings: ['required']
  });

  window.App = Ember.Application.create();

  App.ErrorRoute = Ember.Route.extend({
    setupController: function(controller, model) {
      var message;

      this._super(controller, model);
      switch (true) {
        case model instanceof Error:
          message = model.toString();
          break;
        case typeof model.responseText !== 'undefined':
          message = model.responseText;
          break;
        default:
          message = 'An Unknown Error occured';
      }
      controller.set('message', message);
    }
  });

  App.Router.map(function() {
    this.resource('index', {
      path: '/'
    });
    this.resource('login', {
      path: '/login'
    });
    this.resource('forgot', {
      path: '/forgot'
    });
    this.resource('reset', {
      path: '/reset'
    });
    this.resource('account', {
      path: '/account'
    });
    this.resource('activity', {
      path: '/activity'
    });
    this.resource('register', {
      path: '/register'
    });
    this.resource('privacy', {
      path: '/privacy'
    });
    this.resource('about', {
      path: '/about'
    });
    this.resource('terms', {
      path: '/terms'
    });



  });

  window.getTokens = function() {
    var query, tokens;

    tokens = {};
    query = location.search;
    query = query.slice(1);
    query = query.split('&');
    $.each(query, function(i, value) {
      var token;

      token = value.split('=');
      tokens[decodeURIComponent(token[0])] = decodeURIComponent(token[1]);
    });
    return tokens;
  };

  window.getErrorMessage = function(model) {
    var message;

    switch (true) {
      case model instanceof Error:
        message = model.toString();
        break;
      case model && typeof model.responseText !== 'undefined':
        message = model.responseText;
        break;
      case model && typeof model.responseObject !== 'undefined':
        message = JSON.stringify(model.responseObject);
        break;
      default:
        message = 'An Unknown Error occured';
    }
    return message;
  };
