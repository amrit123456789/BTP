const seq= require('sequelize')

const db =new seq ( 'btp',
'admin',
'adminpass',
{
    dialect:'mysql',
    host: 'localhost'
})


const siteuser = db.define('siteuser',{
    name:{
        type:seq.STRING(30),
        allowNull:false
    },
    phone_no :{
        type:seq.STRING(20),
        allowNull:false,
        unique:true
    },
    school:{
        type:seq.STRING(30),
        allowNull:false
    },
    email:{
        type:seq.STRING(30),
        allowNull:false,
        unique:true
    },
    username:{
        type:seq.STRING(30),
        allowNull:false,
        unique:true
    },
    password:{
        type:seq.STRING(30),
        allowNull:false
    }
    
})

db.sync().then(()=>console.log("database is ready"))

exports=module.exports={
    db,siteuser
}