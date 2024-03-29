// Go watch https://youtu.be/bQX2XLmat4M?t=1187 for more elaboration
const passport = require('passport');
const passportJWT = require('passport-jwt');
const config = require('./config');

const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (knex) => {
  const strategy = new passportJWT.Strategy({
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
    async (payload, done) => {
      console.log(payload);
      let user = await knex
        .select('*')
        .from('users') // from 'users' to 'user'
        .where({ id: payload.id })

      if (user.length == 0) {
        return done(new Error('User not found'))
      } else {
        console.log('!', user);
        return done(null, user[0]);
      }
    }
  )

  passport.use(strategy);

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate('jwt', config.jwtSession);
    }
  }
}