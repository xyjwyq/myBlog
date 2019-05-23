const dbUtil = require('./dbUtil.js');

function addBlog(title, content, views, tags, cTime, uTime, cb ) {
    let insertSql = 'insert into blog (`title`, `content`, `views`, `tags`, `c_time`, `u_time`) values (?,?,?,?,?,?)';
    let connection = dbUtil.createConnection();
    let params = [title, content, views, tags, cTime, uTime];

    connection.connect();
    connection.query(insertSql, params, function (error, res) {
        if (error) throw new Error(error);
        typeof cb === 'function' && cb(res);
    });
    connection.end();
}

function queryAllBlog(cb) {
    let querySql = 'select * from blog';
    let connection = dbUtil.createConnection();

    connection.connect();
    connection.query(querySql, function (error, res) {
        if(error) throw new Error(error);
        typeof cb === 'function' && cb(res);
    });
    connection.end();
}

module.exports = {
    addBlog,
    queryAllBlog
};