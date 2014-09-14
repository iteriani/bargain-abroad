  var hostName, isLocal, localPort;

  localPort = 8000;

  isLocal = process.env.IS_LOCAL ? true : false;

  hostName = isLocal ? "http://localhost:" + localPort : 'http://bargainabroad.herokuapp.com';

  module.exports = {
      host: hostName,
      port: isLocal ? localPort : process.env.PORT,
      dbUrl: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/bargain-abroad',
      fb: {
          clientID: isLocal ? 12345 : 54321,
          clientSecret: isLocal ? 'devsecret' : 'livesecret',
          callbackURL: hostName + '/auth/facebook/callback'
      }
  };
