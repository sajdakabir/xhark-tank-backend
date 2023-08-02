require('dotenv').config()

module.exports.environment={
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    PROT:process.env.PROT || 5000,
    SHOW_ADMIN: process.env.SHOW_ADMIN,
}