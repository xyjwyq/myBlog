const express = require('express');

let app = new express();

app.use(express.static('./page/'));
app.listen(12306, () => {
    console.log('server is running at 12306')
});