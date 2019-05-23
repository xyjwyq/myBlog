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

module.exports.createConnection = createConnection;
module.exports.queryCallBack = queryCallBack;