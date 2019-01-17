const route = require('express').Router()
const passport = require('../../auth/passport')
const  Createsiteuser  = require('../../controllers/siteusers').createsiteuser

route.get('/login', (req, res) => res.render('pages/auth/login'))
route.get('/signup', (req, res) => res.render('pages/auth/signup'))

route.post('/signup', async (req, res) => {
   console.log("before database")
  try {
    await Createsiteuser(req.body.name,req.body.phone_no,req.body.school,req.body.email,req.body.username,req.body.password)
  } catch (e) {
    throw e
  }
  console.log("after database")
  res.redirect('/auth/login')
  console.log("after redirecting")
}
)

route.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/mainpage'
}))

module.exports = route