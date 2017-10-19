/***********************
 load dotenv
***********************/

require('dotenv').config();

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const multer = require('multer');
const upload = multer();
const passport = require('passport');
const session = require('express-session');

const cheat = require('./routes/cheats');
const index = require('./routes/index');
const users = require('./routes/users');
const auth = require('./routes/auth');

const app = express();
/********************************
  lets fix 404 error when refreshing browser in SPA(vuejs)
********************************/
const history = require('connect-history-api-fallback');
const connect = require('connect');

app.use(history());


/********************************
connect to database
********************************/
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useMongoClient: true});
//mongoose.connect('mongodb://127.0.0.1/express-project', {useMongoClient: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
	console.log('connected to mongoose');
})
/*******************************
view engine setup
*******************************/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
/***************************************
passport
***************************************/
app.use(session({
	secret: 'iloveyouianrussell',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());//persistent login session

app.use('/', index);
app.use('/users', users);
app.use('/cheats', cheat);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
var cors = require('cors');
var whitelist = [
    'http://0.0.0.0:9000',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));
module.exports = app;
