function init(passport, TwitterStrategy, pkginfo){
  passport.use(new TwitterStrategy({
    consumerKey: pkginfo.oauth.twitter.TWITTER_CONSUMER_KEY,
    consumerSecret: pkginfo.oauth.twitter.TWITTER_CONSUMER_SECRET,
    callbackURL: pkginfo.oauth.twitter.callbackURL
  }, function(token, tokenSecret, profile, done) {
    //
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // req.session.passport 정보를 저장하는 단계이다.
    // done 메소드에 전달된 정보가 세션에 저장된다.
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //
    return done(null, profile);
  }));
}

module.exports = init;