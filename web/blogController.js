const blogDao = require('../dao/blogDap.js');

const baseUtil = require('../util/baseUtil.js');

let path = new Map();

function editBlog(request, response) {
    request.on('data', function(data) {
        let {title, tags, content} = baseUtil.postParamsParse(data.toString());
        //将tags中可能出现的中文逗号替换
        tags = tags.replace(/ /g, "").replace('，', ',');
        blogDao.addBlog(title, content, 0, tags, baseUtil.getNow(), baseUtil.getNow(), function (res) {
           response.writeHead(200);
           response.write(baseUtil.writeResult('success', '添加成功', null));
           response.end();
        });

    });

}
path.set('/editBlog', editBlog);

function getAllBlog(request, response) {
    blogDao.queryAllBlog(function (res) {
        response.writeHead(200);
        response.write(baseUtil.writeResult('success', '查询成功', res));
        response.end();
    })
}
path.set('/getAllBlog', getAllBlog);

module.exports.path = path;