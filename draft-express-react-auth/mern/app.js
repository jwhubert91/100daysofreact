const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportJWT = require('passport-jwt');

JWTStrategy = passportJWT.Strategy;

const apiRouter = require('./routes/api');

const app = express();
app.use(passport.initialize());

const user = {
  id: '1',
  email: 'example@email.com',
  password: 'password',
};

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    (email, password, done) => {
      if (email === user.email && password === user.password) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'jwt_secret',
    },
    (jwt_payload, done) => {
      if (user.id === jwt_payload.user_id) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: 'Token does not match.',
        });
      }
    }
  )
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  return res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
