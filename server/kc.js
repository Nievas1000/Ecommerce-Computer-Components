const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();

const db = mysql.createConnection({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: 3306
})

module.exports = db