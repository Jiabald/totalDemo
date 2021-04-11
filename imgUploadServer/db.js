const mysql2 = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const { host, mysql_port, user, password, database } = process.env

const pools = mysql2.createPool({
    host,
    port: mysql_port,
    user,
    password,
    database
})

pools.getConnection((err, conn) => {
    conn.connect(err => {
        if (err) {
            console.log('mysql connect err', err)
        } else {
            console.log('mysql connect success')
        }
    })
})

module.exports = pools.promise()