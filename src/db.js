const seq= require('sequelize')

const db =new seq ( 'btp',
'admin',
'adminpass',
{
    dialect:'mysql',
    host: 'localhost'
})


const siteuser = db.define('siteuser',{
    username:{
        type:seq.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:seq.STRING,
        allowNull:false
    },
    name:seq.STRING,
    phone_no :{
        type:seq.BIGINT,
        allowNull:false,
        unique:true
    },
    school:{
        type:seq.STRING,
        allowNull:false
    },
    email:{
        type:seq.STRING,
        allowNull:false,
        unique:true
    }
})

db.sync().then(()=>console.log("database is ready"))

exports=module.exports={
    db,siteuser
}