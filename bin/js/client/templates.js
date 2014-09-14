this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n    <h1>About</h1>\n\n    <ul class=\"list-unstyled\">\n        <li>\n            <h3>What is Bargain Abroad?</h3>\n            <ul>\n                <li>Bargain abroad yay</li>\n                <li>Bargain abroad yay</li>\n                <li>Bargain abroad yay</li>\n            </ul>\n        </li>\n    </ul>\n\n</div>\n");
  
});

this["Ember"]["TEMPLATES"]["account"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                            <dt>Email Address</dt>\n                            <dd>");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</dd>\n                        ");
  return buffer;
  }

  data.buffer.push("<div class=\"container account\">\n\n    <h1>My Account</h1>\n\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            <strong>Account Information</strong>\n        </div>\n        <div class=\"panel-body\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-2\">\n                    <img class=\"thumbnail\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.thumbnail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                </div>\n                <div class=\"col-xs-12 col-sm-10\">\n                    <dl class=\"dl-horizontal\">\n                        ");
  stack1 = helpers['if'].call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </dl>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["activity"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n    <h1>Activity</h1>\n\n\n</div>");
  
});

this["Ember"]["TEMPLATES"]["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"container error\">\n    <h1>Error</h1>\n    <div class=\"alert alert-warning\">\n        <h1 class=\"text-warning\">\n            <div class=\"pull-right\">\n                <span class=\"glyphicon glyphicon-warning-sign\"></span>\n            </div>\n            <h3>\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n            </h3>\n        </h1>\n    </div>\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Privacy Policy");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Terms &amp; Conditions");
  }

  data.buffer.push("<div class=\"container\">\n    <hr>\n    <footer class=\"text-center\">\n        <ul class=\"list-unstyled\">\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "privacy", options) : helperMissing.call(depth0, "link-to", "privacy", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n            <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "terms", options) : helperMissing.call(depth0, "link-to", "terms", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        </ul>\n        <hr>\n        <p><h4>&copy; Bargain Abroad ");
  stack1 = helpers._triageMustache.call(depth0, "currentYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4></p>\n    </footer>\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["forgot"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"form-group\">\n            <div class=\"alert alert-danger\">\n                ");
  stack1 = helpers.each.call(depth0, "errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <p>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"form-group\">\n                <div class=\"alert alert-info\">\n                    ");
  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <p>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("One moment...");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Submit");
  }

  data.buffer.push("<div class=\"register container\">\n\n    <h1>Forgot Password?</h1>\n\n    <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n\n        <div class=\"form-group\">\n            <label for=\"inputEmailAddress\">Email address</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'id': ("inputEmailAddress"),
    'value': ("email"),
    'placeholder': ("Email address")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <button type=\"submit\" class=\"btn btn-primary btn-lg\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("loading")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers['if'].call(depth0, "loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-lg\"\n            ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("loading")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Cancel\n        </button>\n\n    </form>\n\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["header"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <div class=\"pull-right visible-xs\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-success navbar-btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary navbar-btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "register", options) : helperMissing.call(depth0, "link-to", "register", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("Login");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("Register");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"navbar-right hidden-xs\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-success navbar-btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "login", options) : helperMissing.call(depth0, "link-to", "login", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-primary navbar-btn")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "register", options) : helperMissing.call(depth0, "link-to", "register", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                <div class=\"pull-right\">\n                    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("user.thumbnail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                    <div class=\"navbar-text\">\n                        <p>");
  stack1 = helpers._triageMustache.call(depth0, "user.imvu.avatarName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    </div>\n                    <ul class=\"nav navbar-nav\">\n                        <li><a href=\"#account\"><span class=\"glyphicon glyphicon-cog\"></span> Account</a></li>\n                        <li><a href=\"#activity\"><span class=\"glyphicon glyphicon-time\"></span> Activity</a></li>\n                        <li><a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n                    </ul>\n                </div>\n            ");
  return buffer;
  }

  data.buffer.push("<nav class=\"navbar navbar-inverse navbar-fixed-top header\">\n    <div class=\"container\">\n\n        <div class=\"navbar-header\">\n            ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <a class=\"navbar-brand\" href=\"#\"><small>Bargain Abroad</small></a>\n\n            ");
  stack1 = helpers.unless.call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        ");
  stack1 = helpers.unless.call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"collapse navbar-collapse\">\n            ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n    </div>\n</nav>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n</div>\n");
  
});

this["Ember"]["TEMPLATES"]["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n    <div class=\"loader-spinner-container\">\n        <div id=\"loader\"></div>\n    </div>\n\n</div>");
  
});

this["Ember"]["TEMPLATES"]["login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"form-group\">\n            <div class=\"alert alert-info\">\n                <p>You need to login before you can purchase credits.</p>\n            </div>\n        </div>\n    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                        <div class=\"form-group\">\n                            <div class=\"alert alert-danger\">\n                                <p>Invalid credentials. Please try again.</p>\n                            </div>\n                        </div>\n                    ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("One moment...");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Login");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Cancel");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n                        <strong>Forgot password?</strong>\n                    ");
  }

  data.buffer.push("<div class=\"login container\">\n\n    ");
  stack1 = helpers['if'].call(depth0, "loginBeforePurchase", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <h5 class=\"text-center text-muted\">Login with your Facebook account</h5>\n            <div class=\"well well-lg\">\n                <a href=\"/auth/facebook/go\" class=\"btn btn-lg btn-block btn-primary fbBtn\">\n                    <span class=\"fbIcon\">f </span> Login with Facebook\n                </a>\n            </div>\n            <h5 class=\"text-center text-muted\">Login with your account</h5>\n            <div class=\"well well-lg\">\n                <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                    <div class=\"form-group\">\n                        <label for=\"inputEmail\">Email address</label>\n                        <div class=\"input-group input-group-lg\">\n                            <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span></span>\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'id': ("inputEmail"),
    'placeholder': ("Enter email"),
    'value': ("username")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputPassword\">Password</label>\n                        <div class=\"input-group input-group-lg\">\n                            <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                           ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'id': ("inputPassword"),
    'placeholder': ("Password"),
    'value': ("password")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'placeholder': "STRING",'value': "ID"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'placeholder': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                        </div>\n                    </div>\n                    ");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <div class=\"form-group\">\n                        <button type=\"submit\" class=\"btn btn-lg btn-primary\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("loading")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            ");
  stack1 = helpers['if'].call(depth0, "loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                        </button>\n                        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-lg btn-default"),
    'disabled': ("loading")
  },hashTypes:{'class': "STRING",'disabled': "ID"},hashContexts:{'class': depth0,'disabled': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </form>\n                <div class=\"text-center\">\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "forgot", options) : helperMissing.call(depth0, "link-to", "forgot", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["privacy"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n    <h1>Privacy Policy</h1>\n\n    <ul class=\"list-unstyled\">\n        <li>\n            <strong>What information do we collect?</strong>\n            <small><p>\n                We collect information from you when you register on our site. \n\n                Any data we request that is not required will be specified as voluntary or optional. \n\n                When ordering or registering on our site, as appropriate, you may be asked to enter your name or e-mail address. You may, however, visit our site anonymously.\n\n                Like most websites, we use cookies to enhance your experience, gather general visitor information, and track visits to our website. Please refer to the 'do we use cookies?' section below for information about cookies and how we use them.\n            </p></small>\n        </li>\n        <li>\n            <strong>What do we use your information for?</strong>\n            <p><small>\n                Any of the information we collect from you may be used in one of the following ways:\n                <ul>\n                    <li><strong>To personalize your experience.</strong><br />Your information helps us to better respond to your individual needs.</li>\n                    <li><strong>To improve our website.</strong><br />We continually strive to improve our website offerings based on the information and feedback we receive from you.</li>\n                    <li><strong>To improve customer service.</strong><br />Your information helps us to more effectively respond to your customer service requests and support needs.</li>\n                    <li><strong>To process transactions.</strong><br />Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested by the customer.</li>\n                    <li><strong>To send periodic emails.</strong><br />The email address you provide for order processing, may be used to send you information and updates pertaining to your order or request, in addition to receiving occasional company news, updates, promotions, related product or service information, etc.</li>\n                </ul>\n            </small></p>\n        </li>\n        <li>\n            <strong>How do we protect your information?</strong>\n            <p><small>We implement a variety of security measures to maintain the safety of your personal information when you submit a request, place an order or enter, submit, or access your personal information. \n\n                These security measures include: password protected directories and databases to safeguard your information, SSL (Secure Sockets Layered) technology to ensure that your information is fully encrypted and sent across the Internet securely or PCI Scanning to actively protect our servers from hackers and other vulnerabilities. \n\n                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.\n\n                After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.\n            </small></p>\n        </li>\n        <li>\n            <strong>Do we use cookies?</strong>\n            <p><small>\n                Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.\n            </small></p>\n        </li>\n        <li>\n            <strong>Do we disclose any information to outside parties?</strong>\n            <p><small>\n                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.\n            </small></p>\n        </li>\n        <li>\n            <strong>Third party links</strong>\n            <p><small>\n                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.\n            </small></p>\n        </li>\n        <li>\n            <strong>California Online Privacy Protection Act Compliance</strong>\n            <p><small>\n                Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.\n            </small></p>\n        </li>\n        <li>\n            <strong>Children’s Online Privacy Protection Act Compliance</strong>\n            <p><small>\n                We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.\n            </small></p>\n        </li>\n        <li>\n            <strong>CAN-SPAM Compliance</strong>\n            <p><small>\n                We have taken the necessary steps to ensure that we are compliant with the CAN-SPAM Act of 2003 by never sending out misleading information.\n            </small></p>\n        </li>\n        <li>\n            <strong>Online Privacy Policy Only</strong>\n            <p><small>\n                This online privacy policy applies only to information collected through our website and not to information collected offline.\n            </small></p>\n        </li>\n        <li>\n            <strong>Terms and Conditions</strong>\n            <p><small>\n                Please also visit our <a href=\"#terms\">Terms and Conditions</a> section establishing the use, disclaimers, and limitations of liability governing the use of our website.\n            </small></p>\n        </li>\n        <li>\n            <strong>Your Consent</strong>\n            <p><small>\n                By using our site, you consent to our privacy policy.\n            </small></p>\n        </li>\n        <li>\n            <strong>Changes to our Privacy Policy</strong>\n            <p><small>\n                If we decide to change our privacy policy, we will post those changes on this page, send an email notifying you of any changes, and/or update the Privacy Policy modification date below. Policy changes will apply only to information collected after the date of the change.\n                <br />\n                This policy was last modified on <strong>2/3/2014</strong>.\n            </small></p>\n        </li>\n        <li>\n            <strong>Privacy Policy Customer Pledge</strong>\n            <p><small>\n                We pledge to you, our customer, that we have made a dedicated effort to bring our privacy policy in line with the following important privacy laws and initiatives:\n                <ul class=\"list-unstyled\">\n                    <li>Federal Trade Commission Fair</li>\n                    <li>California Online Privacy Protection Act</li>\n                    <li>Children’s Online Privacy Protection Act</li>\n                    <li>Privacy Alliance</li>\n                    <li>Controlling the Assault of Non-Solicited Pornography and Marketing Act</li>\n                    <li>Trust Guard Privacy Requirements</li>\n                </ul>\n            </small></p>\n        </li>\n    </ul>\n</div>");
  
});

this["Ember"]["TEMPLATES"]["register"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("<span class=\"glyphicon glyphicon-ok form-control-feedback\"></span>");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"form-group\">\n                <div class=\"alert alert-danger\">\n                    ");
  stack1 = helpers.each.call(depth0, "errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    ");
  stack1 = helpers['if'].call(depth0, "exists", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <p>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <p>Did you ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("alert-link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "forgot", options) : helperMissing.call(depth0, "link-to", "forgot", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("forget your password?");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("One moment...");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("Register");
  }

function program13(depth0,data) {
  
  
  data.buffer.push("Cancel");
  }

  data.buffer.push("<div class=\"register container\">\n\n    <h2>Register a new CredX account</h2>\n\n    <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group emailOk:has-feedback emailOk:has-success")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            <label class=\"control-label\" for=\"inputEmailAddress\">Email address</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("email"),
    'class': ("form-control"),
    'id': ("inputEmailAddress"),
    'value': ("email"),
    'placeholder': ("Email address"),
    'required': (true)
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'required': "BOOLEAN"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "emailOk", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group passwordOk:has-feedback passwordOk:has-success")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            <label class=\"control-label\" for=\"inputPassword\">Password</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'id': ("inputPassword"),
    'value': ("password"),
    'placeholder': ("Type a strong password"),
    'required': (true)
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'required': "BOOLEAN"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "passwordOk", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":form-group pazzwordOk:has-feedback pazzwordOk:has-success")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            <label class=\"control-label\" for=\"inputPazzword\">Confirm Password</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'id': ("inputPazzword"),
    'value': ("pazzword"),
    'placeholder': ("Re-type your password"),
    'required': (true)
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'required': "BOOLEAN"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n            ");
  stack1 = helpers['if'].call(depth0, "pazzwordOk", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-lg\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("cannotSubmit")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                ");
  stack1 = helpers['if'].call(depth0, "loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default btn-lg"),
    'disabled': ("loading")
  },hashTypes:{'class': "STRING",'disabled': "ID"},hashContexts:{'class': depth0,'disabled': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n\n    </form>\n\n</div>\n");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["reset"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"form-group\">\n                <div class=\"alert alert-danger\">\n                    ");
  stack1 = helpers.each.call(depth0, "errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                        <p>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n                    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"form-group\">\n                <div class=\"alert alert-info\">\n                    ");
  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n            </div>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("One moment...");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("Submit");
  }

  data.buffer.push("<div class=\"register container\">\n\n    <h1>Reset Password</h1>\n\n    <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n\n        <div class=\"form-group\">\n            <label for=\"inputToken\">Token</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-tag\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'class': ("form-control"),
    'id': ("inputToken"),
    'value': ("token"),
    'placeholder': ("Enter a valid token"),
    'disabled': ("hasToken")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING",'disabled': "ID"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"inputPass\">New Password</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'id': ("inputPass"),
    'value': ("pass"),
    'placeholder': ("Enter your new password")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"inputPazz\">Re-type Password</label>\n            <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-lock\"></span></span>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'class': ("form-control"),
    'id': ("inputPazz"),
    'value': ("pazz"),
    'placeholder': ("Re-type your new password")
  },hashTypes:{'type': "STRING",'class': "STRING",'id': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'class': depth0,'id': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n        </div>\n\n        ");
  stack1 = helpers['if'].call(depth0, "errors", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = helpers['if'].call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <button type=\"submit\" class=\"btn btn-primary btn-lg\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("loading")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n            ");
  stack1 = helpers['if'].call(depth0, "loading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-lg\"\n            ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("loading")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">Cancel\n        </button>\n\n    </form>\n\n</div>");
  return buffer;
  
});

this["Ember"]["TEMPLATES"]["terms"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n\n    <h1>Terms and Conditions of Use</h1>\n\n    <ol>\n        <li>If you are traveling and</li>\n    </ol>\n\n</div>");
  
});