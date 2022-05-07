const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'kingcomponents',
})

module.exports = db