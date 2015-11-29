function init(passport, GoogleStrategy, pkginfo){
  passport.use(new GoogleStrategy({
        clientID: pkginfo.oauth.google.GOOGLE_APP_ID,
        clientSecret: pkginfo.oauth.google.GOOGLE_APP_SECRET,
        callbackURL: pkginfo.oauth.google.callbackURL
      },
      function(accessToken, refreshToken, profile, done) {
        //
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // req.session.passport 정보를 저장하는 단계이다.
        // done 메소드에 전달된 정보가 세션에 저장된다.
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //
        profile.username = profile.displayName;

        return done(null, profile);
      }));
}

module.exports = init;