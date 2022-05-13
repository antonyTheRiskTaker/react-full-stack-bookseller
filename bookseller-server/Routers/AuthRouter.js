// AuthRouter Todo Repo Copy and paste
const bcrypt = require('bcrypt')
const config = require('../auth/config')
const jwt = require('jsonwebtoken')

class AuthRouter {
  constructor (express, knex) {
    this.express = express
    this.knex = knex
  }

  router () {
    let router = this.express.Router()

    router.post('/login', this.login.bind(this))
    router.post('/signup', this.signup.bind(this))

    return router
  }

  async login (req, res) {
    console.log('loggin in')
    console.log(req.body)
    let email = req.body.email
    let password = req.body.password

    let user = await this.knex
      .select('*')
      .from('users') // change from 'users' to 'user' (my database table)
      .where({ email: email }) // inputed email matches email in the database
      // .then(data => data[0])
      .then(data => {
        console.log(data);
        return data[0];
      })
    
    console.log(user);

    if (await bcrypt.compare(password, user.password)) {
      let payload = {
        id: user.id
      }

      let token = jwt.sign(payload, config.jwtSecret)
      res.json({ token })
    } else {
      console.log('Password incorrect');
      res.send('fail');
    }
  }

  async signup (req, res) {
    console.log(req.body)
    const { username, email, password } = req.body

    let hashedpw = await bcrypt.hash(password, 10)

    let userInfo = {
      username,
      email,
      password: hashedpw
    }

    let userId = await this.knex('users') // from 'users' to 'user' (my db table)
      .insert(userInfo)
      .returning('id')

    res.send(userId)
  }
}

module.exports = AuthRouter