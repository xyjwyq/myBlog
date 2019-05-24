const dbUtil = require('./dbUtil.js');

function addBlog(title, content, views, tags, cTime, uTime, cb) {
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
    let querySql = 'select * from blog order by c_time desc';
    let connection = dbUtil.createConnection();

    connection.connect();
    connection.query(querySql, function (error, res) {
        if (error) throw new Error(error);
        typeof cb === 'function' && cb(res);
    });
    connection.end();
}

function queryBlogByViewsAndTime(cb) {
    let querySql = 'select id,title from blog order by views desc, c_time desc limit 10',
        params = [];
    dbUtil.queryFn(querySql, params, cb);
}

function queryBlogByTime(cb) {
    let querySql = 'select id,title from blog order by c_time desc',
        params = [];
    dbUtil.queryFn(querySql, params, cb);
}

function queryBlogById(id, cb) {
    let querySql = 'select * from blog where id=?',
        params = [id];
    dbUtil.queryFn(querySql, params, cb);
}

function addBlogViewsById(id, views, cb) {
    let updateSql = 'update blog set views=? where id=?',
        params = [views, id];
    dbUtil.queryFn(updateSql, params, cb);
}

function queryBlogCount(cb) {
    let querySql = 'select count(1) as blogCount from blog',
        params = [];
    dbUtil.queryFn(querySql, params, cb);
}

function queryBlogListByPage(page, pageSize, cb) {
    let querySql = 'select * from blog order by c_time desc limit ?,?',
        params = [page * pageSize, pageSize];
    dbUtil.queryFn(querySql, params, cb)
}

module.exports = {
    addBlog,
    queryAllBlog,
    queryBlogByViewsAndTime,
    queryBlogByTime,
    queryBlogById,
    addBlogViewsById,
    queryBlogCount,
    queryBlogListByPage
};