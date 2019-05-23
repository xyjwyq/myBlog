const dbUtil = require('./dbUtil.js');

function insertTagBlogMapping(tagId, blogId, cTime, uTime, cb) {
    let insertSql = 'insert into tag_blog_mapping (`tag_id`, `blog_id`, `c_time`, `u_time`) values (?, ?, ?, ?)',
        params = [ tagId, blogId, cTime, uTime ];

    dbUtil.queryFn(insertSql, params, cb);
}

module.exports = {
    insertTagBlogMapping
};