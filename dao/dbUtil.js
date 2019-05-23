let mysql = require('mysql');

function createConnection() {
    let connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'Jstq000666',
        database: 'my_blog'
    });
    return connection;
}

function queryCallBack(cb) {
    return function (error, res) {
        if (error) throw new Error(error);

        typeof cb === 'function' && cb(res);
    }
}

function queryFn(sqlStatement, params = [], cb) {
    let connection = createConnection();
    connection.connect();
    connection.query(sqlStatement, params, queryCallBack(cb));
    connection.end();
}

module.exports.createConnection = createConnection;
module.exports.queryCallBack = queryCallBack;
module.exports.queryFn = queryFn;