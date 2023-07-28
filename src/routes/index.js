const initRoutes=(app)=>{
    app.get('/',async(req,res)=>{
        res.json({
            "message":"Welcome to XharkTank Developers Portal"
        })
    })
    app.use('*',(req,res)=>{
        res.status(404).json({
            "status": 404,
            "message": "Invalid route"
        })
    })
}

module.exports={
    initRoutes
}