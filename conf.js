const fs = require('fs');

let conf = {};

try{
    let confFile = fs.readFileSync('./server.conf');
    let confItems = confFile.toString().split('\r\n');
    confItems.reduce(function(pre, cur) {
        let confKV = cur.split('=');
        pre[confKV[0].trim()] = confKV[1].trim();
        return pre;
    }, conf);
} catch(e) {
    throw new Error(e);
}

module.exports = conf;