const { createConnection } = require('mongoose')
const { environment } = require('./environment.loader')

const db = createConnection(`mongodb+srv://${environment.DB_USER}:${environment.DB_PASS}@${environment.DB_HOST}/`, {
    autoIndex: false
})

module.exports.db = db
