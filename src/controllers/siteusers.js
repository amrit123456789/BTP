const Siteuser = require('../db').siteuser

async function createsiteuser (name,phone_no,school,email,username,password) {
  if (typeof name !== 'text' || name.length < 1) {
    throw new Error('Name is empty or undefined')
  }
  if (typeof phone_no !== 'number' || phone_no.length < 10) {
    throw new Error('invalid phone number')
  }
  if (typeof school !== 'text') {
    throw new Error('school name not correct')
  }
  if (typeof email !== 'text') {
    throw new Error('Email id not correct')
  }
  if (typeof username !== 'text'|| username.length < 2) {
    throw new Error('username name not correct')
  }
  if (typeof password !== 'text' || password.length<4){
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
