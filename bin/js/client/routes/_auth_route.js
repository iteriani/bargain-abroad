// Generated by CoffeeScript 1.6.2
(function() {
  App.AuthRoute = Ember.Route.extend({
    beforeModel: function(transition) {
      if (!this.controllerFor('auth').get('user')) {
        this.controllerFor('login').set('pendingTransition', transition);
        this.transitionTo('login');
      }
    }
  });

  App.NoAuth = Ember.Route.extend({
    beforeModel: function() {
      if (this.controllerFor('auth').get('user')) {
        this.transitionTo('index');
      }
    }
  });

}).call(this);