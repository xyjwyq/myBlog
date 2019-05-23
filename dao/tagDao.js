const dbUtil = require('./dbUtil.js');

function insertTag(tag, cTime, uTime, cb) {
    let insertSql = 'insert into tags (`tag`, `c_time`, `u_time`) values (?, ?, ?)',
        params = [tag, cTime, uTime];

    dbUtil.queryFn(insertSql, params, cb);
}

function queryCustomTag(tag, cb) {
    let querySql = 'select id from tags where tag=?',
        params = [tag];

    dbUtil.queryFn(querySql, params, cb);
}

function queryAllTag(cb) {
    let querySql = 'select tag from tags',
        params = [];

    dbUtil.queryFn(querySql, params, cb);
}

module.exports = {
    insertTag,
    queryCustomTag,
    queryAllTag
};