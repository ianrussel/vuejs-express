var passport = require('passport')
  , GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/user');

passport.use(new GitHubStrategy({
    clientID: "0f99c06fee87610778ef",
    clientSecret: "2ae5cf5df95056e5b526dca41f740ff9655aa50f",
    callbackURL: "http://localhost:9000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({userid: profile.id}, {name: profile.displayName,userid: profile.id}, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;
