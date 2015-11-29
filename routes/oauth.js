var TwitterStrategy = require('passport-twitter').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

function init(app, router){
  var pkginfo = require('../package.json'),
      passport = require('passport'),
      twitter = require("../oauth/twitter"),
      facebook = require("../oauth/facebook"),
      google = require("../oauth/google"),
      passport_config = require("../oauth/passport_config");

  passport_config(app, passport);
  twitter(passport, TwitterStrategy, pkginfo);
  facebook(passport, FacebookStrategy, pkginfo);
  google(passport, GoogleStrategy, pkginfo);

  router.get('/facebook', passport.authenticate('facebook'));

  router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  router.get('/twitter', passport.authenticate('twitter'));

  router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  router.get('/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/plus.login'
    ]
  }));

  router.get('/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

  router.get('/logout', function(req, res){
    //
    // passport 에서 지원하는 logout 메소드이다.
    // req.session.passport 의 정보를 삭제한다.
    //
    req.session.destroy();
    req.logout();
    res.redirect('/');
  });

  return router;
}

module.exports = init;
