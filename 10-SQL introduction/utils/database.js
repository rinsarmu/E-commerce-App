const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sys',
    password: 'root@123'
})

module.exports = pool.promise();