const everydayDao = require('../dao/everydayDao.js');
const baseUtil = require('../util/baseUtil.js');

let path = new Map();

function addEveryday(request, response) {
    request.on('data', function (data) {
        let {content, author} = baseUtil.postParamsParse(data.toString());
        everydayDao.insertEveryday(content, author, baseUtil.getNow(), function (res) {
            response.writeHead(200);
            response.write(baseUtil.writeResult('success', '添加每日一句成功', null));
            response.end();
        })
    });
}

path.set('/addEveryday', addEveryday);

function queryEveryday(request, response) {
    everydayDao.queryEveryday(function (res) {
        response.writeHead(200);
        response.write(baseUtil.writeResult('success', '查询每日一句成功', res));
        response.end();
    })
}

path.set('/queryEveryday', queryEveryday);

module.exports.path = path;