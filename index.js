const express = require('express');

const conf = require('./conf.js');
const loader = require('./loader.js');

let app = new express();

app.use(express.static(conf.static_file_path));

// 博客相关
app.post('/editBlog', loader.get('/editBlog'));
app.get('/getAllBlog', loader.get('/getAllBlog'));
app.get('/getNewHotBlog', loader.get('/getNewHotBlog'));

//每日一句
app.post('/addEveryday', loader.get('/addEveryday'));
app.get('/queryEveryday', loader.get('/queryEveryday'));

//标签云
app.get('/getAllTag', loader.get('/getAllTag'));


app.listen(conf.port, () => {
    console.log('server is running at 12306')
});