import AuthRoute from './core/auth.route.js';
const initRoutes = (app) => {
    app.use('/auth',AuthRoute);
    app.get('/', async (req, res) => {
        res.json({
            "message": "Welcome to XharkTank Developers Portal"
        })
    })
    app.use('*', (req, res) => {
        res.status(404).json({
            "status": 404,
            "message": "Invalid route"
        })
    })
}

export {
    initRoutes
}