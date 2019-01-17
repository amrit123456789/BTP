const Siteuser = require('../db').siteuser

async function createsiteuser (name,phone_no,school,email,username,password) {
  if (typeof(name) !== 'string' ){
    console.log(name)
    console.log(phone_no)
    console.log(typeof(school))
    console.log(typeof(email))

    console.log(typeof(username))
    console.log(typeof(password))

    throw new Error('Name is not string type')
  }
  if( name.length < 1) {
    throw new Error('Name length <1')
  }
  if (typeof phone_no !== 'string' || phone_no.length < 10) {
    throw new Error('invalid phone number')
  }
  if (typeof school !== 'string') {
    throw new Error('school name not correct')
  }
  if (typeof email !== 'string') {
    throw new Error('Email id not correct')
  }
  if (typeof username !== 'string'|| username.length < 1) {
    throw new Error('username name not correct')
  }
  if (typeof password !== 'string' || password.length<1){
    throw new Error('password not valid')      
  }
   try {
        return await Siteuser.create({
            name,phone_no,school,email,username,password
        })
      } catch (e) {
        throw e
      }
}

//createsiteuser("amrit1",9899741190,"bbps","amritagarwal98@gmail.com","amrit","amrit")

module.exports = {
    createsiteuser
}
