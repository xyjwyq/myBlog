const dbUtil = require('./dbUtil.js');

function insertEveryday(content, author, cTime, cb) {
    let insertSql = 'insert into every_day (`content`, `author`, `c_time`) values (?, ?, ?)';
    let params = [content, author, cTime];
    let connection = dbUtil.createConnection();

    connection.connect();
    connection.query(insertSql, params, dbUtil.queryCallBack(cb));
    connection.end();
}

function queryEveryday(cb) {
    let querySql = 'select * from every_day order by c_time desc limit 1',
        params = [];

    let connection = dbUtil.createConnection();
    connection.connect();
    connection.query(querySql, params, dbUtil.queryCallBack(cb));
    connection.end();
}

module.exports = {
    insertEveryday,
    queryEveryday
};