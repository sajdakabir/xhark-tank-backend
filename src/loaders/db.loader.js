const { createConnection } = require('mongoose')
const { environment } = require('./environment.loader')


const db = createConnection(`mongodb+srv://${environment.DB_USER}:${environment.DB_PASS}@${environment.DB_HOST}/${environment.DB_NAME}`, {
    autoIndex: false
})

module.exports.db = db