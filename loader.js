const fs = require('fs');
const conf = require('./conf');

let pathMap = new Map();

try {
    let controllerDir = fs.readdirSync(conf.web_path);
    if (controllerDir.length === 0) return;
    controllerDir.forEach(function(filename) {
        let controller = require(conf.web_path + filename);
        if(controller.path) {
            for(let [k, v] of controller.path) {
                if(pathMap.has(k)) throw new Error('url exception, url = ' + k);
                pathMap.set(k, v);
            }
        }
    });
} catch(e) {
    throw new Error(e);
}


module.exports = pathMap;