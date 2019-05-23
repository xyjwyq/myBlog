const blogDao = require('../dao/blogDap.js');
const tagDao = require('../dao/tagDao');
const tagBlogMappingDao = require('../dao/tagBlogMappingDao');

const baseUtil = require('../util/baseUtil.js');

let path = new Map();

function editBlog(request, response) {
    request.on('data', function (data) {
        let {title, tags, content} = baseUtil.postParamsParse(data.toString());
        //将tags中可能出现的中文逗号替换
        tags = tags.replace(/ /g, "").replace('，', ',');
        blogDao.addBlog(title, content, 0, tags, baseUtil.getNow(), baseUtil.getNow(), function (res) {
            // baseUtil.sucCallBack(request, response)(res);
            //添加完博客之后需要将其标签插入到tags表中，以及在tag_blog_mapping表中添加映射
            // 将标签添加入tag表中 --> 先查询tags表中有没有相应的标签，有则不插入，无则插入
            let blog_id = res.insertId;
            let tagArr = tags.split(',');
            tagArr.forEach(function (tag) {
                if (tag !== '') {
                    queryTag(tag, blog_id, request, response);
                }

            });
        });
    });

}

function queryTag(tag, blog_id, request, response) {
    tagDao.queryCustomTag(tag, function (res) {
        if (res === null || res.length === 0) {
            addTag(tag, blog_id, request, response);
        } else {
            addTagBlogMapping(res[0].id, blog_id, request, response);
        }
    });
}

function addTag(tag, blog_id, request, response) {
    tagDao.insertTag(tag, baseUtil.getNow(), baseUtil.getNow(), function (res) {
        let tag_id = res.insertId;
        addTagBlogMapping(tag_id, blog_id, request, response);
    })
}

function addTagBlogMapping(tag_id, blog_id, request, response) {
    tagBlogMappingDao.insertTagBlogMapping(tag_id, blog_id, baseUtil.getNow(), baseUtil.getNow(), baseUtil.sucCallBack(request, response))
}

path.set('/editBlog', editBlog);

function getAllBlog(request, response) {
    blogDao.queryAllBlog(baseUtil.sucCallBack(request, response))
}

path.set('/getAllBlog', getAllBlog);

function getNewHotBlog(request, response) {
    blogDao.queryBlogByViewsAndTime(baseUtil.sucCallBack(request, response));
}

path.set('/getNewHotBlog', getNewHotBlog);

module.exports.path = path;