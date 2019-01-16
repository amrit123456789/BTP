const passport=require('passport')

const User=require('../db').siteuser

passport.serializeUser((User,done)=>{
    done(null,User.username)
})

passport.deserializeUser(async (username,done)=>{
    User.findOne({
        username: username
    }).then((user) => {
        if (!user) {
            return done(new Error("No such user"))
        }
        return done(null, user)
    }).catch((err) => {
        done(err)
    })
})

passport.use(require('./strategies/passport-localstrategy'))
module.exports = passport