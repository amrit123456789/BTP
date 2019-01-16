const express=require('express')
const session = require('express-session')
const passport = require('./passport')

const app = express()

app.set("view engine", "hbs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'somesecretstring'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', (req,res)=>{
    res.send("hello world")
})

app.listen(2121, ()=>console.log("website on http://localhost:2121"))