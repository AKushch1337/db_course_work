const mysql = require('mysql2');

const connectionUrl = 'mysql://root:root@localhost:3307/mydb'

const connection = mysql.createConnection({
    uri: connectionUrl
});

module.exports = connection;