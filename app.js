
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


var app = express();


var Schema = Schema || {};



mongoose.connect('mongodb://localhost/thinkcrm');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Connected to DB');
});
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String
});
var postSchema = mongoose.Schema({
  title: String,
  text: String
});


userSchema.methods.validPassword = function (password) {
  if (password === this.password) {
    return true; 
  } else {
    return false;
  }
}

var User = mongoose.model('User', userSchema),
    Post = mongoose.model('Post',postSchema);
Schema.db = {connection: db, mongoose: mongoose, BSON: mongoose.mongo.BSONPure};
Schema.User = User;
Schema.Post = Post;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('(30df938/*-*/)f)(FDK38fd8u++'));
  app.use(express.session({secret: '39()F()D((#U*/*_)#*(FJjKdfj3k'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

passport.use(new LocalStrategy(function(username, password, done) {
  
    User.findOne({ username: username }, function(err, user) {
      
      if (err) { 
        return done(err); 
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



var historyRoutes = require('./routes/history')(app),
indexRoutes = require('./routes/index')(app),
userRoutes = require('./routes/user')(app, Schema),
apiRoutes = require('./routes/api')(app, Schema);


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

