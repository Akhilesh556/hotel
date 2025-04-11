const mongoose= require("mongoose")

const mongoURL= 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL,{
    
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




