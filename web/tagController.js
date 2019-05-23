const tagDao = require('../dao/tagDao.js');

const baseUtil = require('../util/baseUtil.js');

let path = new Map();

function getAllTag(request, response) {
    tagDao.queryAllTag(baseUtil.sucCallBack(request, response));
}
path.set('/getAllTag', getAllTag);

module.exports.path = path;