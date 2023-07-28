require('dotenv').config()

module.exports.environment={
    PROT:process.env.PROT || 5000,
    SHOW_ADMIN: process.env.SHOW_ADMIN,
}