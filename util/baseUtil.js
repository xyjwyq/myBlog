function postParamsParse(paramsStr) {
    if (!paramsStr.trim()) return {};
    return JSON.parse(paramsStr);
}

function getNow() {
    return parseInt(Date.now() / 1000);
}

function writeResult(status, msg, data) {
    return JSON.stringify(
        {
            status,
            msg,
            data
        }
    );
}

function sucCallBack(request, response) {
    return function(res = null) {
        response.writeHead(200);
        response.write(writeResult('success', '成功', res));
        response.end();
    }
}


module.exports = {
    postParamsParse,
    getNow,
    writeResult,
    sucCallBack
};