function init(router){
  router.get('/', function(req, res){
    var user_info = req.session.passport ? req.session.passport.user : {};

    res.render('index', { user: user_info });
  });

  return router;
}

module.exports = init;