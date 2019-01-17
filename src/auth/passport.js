const passport=require('passport')

const User=require('../db').siteuser

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (userid,done)=>{
    try {
        const user = await User.findById(userid)
        user.password = undefined
        return done(null, user)
      } catch (e) { done(e) }
    }) 

console.log("in passport.js")
passport.use(require('./strategies/passport-localstrategy'))
module.exports = passport