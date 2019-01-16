const User = require('../../db').siteuser

const localstrategy =require('passport-local').Strategy

const strategy= new localstrategy( async (username, password, done)=>{
    try {
        const user =await User.findOne({where: {username} })
        if(!user){
            return done(new Error("no such username"))
        }
        if (user.password !== password) {
            return done(new Error('Password mismatch'))
          }

          return done(null, user)
        
    } catch (error) {
        done(error)
    }
})

module.exports=strategy