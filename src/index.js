const express=require('express');
const cors=require('cors');
const { environment } = require('./loaders/environment.loader');
const { ValidationError } = require('joi');
const { initRoutes } = require('./routes');

const app=express()
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
)
initRoutes(app);
app.use((err,req,res,next)=>{
    console.log(err);
    if(environment.SHOW_ADMIN){
        console.log(err);
    }
    if(err){
        if(err.statusCode===500){

        }
        res.status(err instanceof ValidationError ? 400 : err.statusCode || 500).send({
            statusCode: err instanceof ValidationError ? 400 : err.statusCode || 500,
            message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong. Please contact the administrator'
        })
    }else{
        next()
    }
})

module.exports.app = app
module.exports.express = express