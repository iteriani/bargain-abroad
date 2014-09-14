  var hostName, isLocal, localPort;

  localPort = 8000;

  isLocal = process.env.IS_LOCAL ? true : false;

  hostName = isLocal ? "http://localhost:" + localPort : 'http://bargainabroad.herokuapp.com';

  module.exports = {
      host: hostName,
      port: localPort,
      dbUrl: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || "mongodb://test:test@kahana.mongohq.com:10004/BargainAbroad",
      fb: {
          clientID: isLocal ? 12345 : 54321,
          clientSecret: isLocal ? 'devsecret' : 'livesecret',
          callbackURL: hostName + '/auth/facebook/callback'
      },
      translator : {
        client_id : "BargainAbroad",
        client_secret : "02R55mDBjaIaBsFdM1m5SqFR5eo8OXtdnLX/fTlKA2Y="
      }
  };
