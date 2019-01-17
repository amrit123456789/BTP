const express=require('express')
const session = require('express-session')
const path = require('path')
const hbs = require('express-hbs')
const passport = require('./auth/passport')

const app = express()

app.set("view engine", "hbs")
app.set('views', path.join(__dirname, '../views'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'somesecretstring',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

/*app.engine('hbs', hbs.express4({
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    defaultLayout: path.join(__dirname, '../views/layouts/main.hbs')
  }))*/


app.use('/', require('./routes/pages'))

app.listen(2122, ()=>console.log("website on http://localhost:2121"))