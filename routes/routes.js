function route_init(app, router){
  var index = require('./index'),
      oauth = require('./oauth'),
      channel = require('./channel');

  app.use("/", index(router));
  app.use("/auth", oauth(app, router));
  app.use("/channel", channel(app, router));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}

module.exports = route_init;