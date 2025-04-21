const mongoose= require("mongoose")
require('dotenv').config()

// const mongoURL= process.env.mongodb_url_local
const mongoURL= process.env.mongodb_url

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db= mongoose.connection; 

db.once('connected', ()=>{
    console.log('connected to mongodb server')
}) 
db.on('error', (err)=>{
    console.log('mongodb connection error',err)
}) 
db.on('disconnected', ()=>{
    console.log(' mongodb disconnected')
}) 

module.exports= db;








