// Go watch https://youtu.be/bQX2XLmat4M?t=1130 for more elaboration

require('dotenv').config();
module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtSession: {
    session: false
  }
};