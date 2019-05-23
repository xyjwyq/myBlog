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



module.exports = {
    postParamsParse,
    getNow,
    writeResult
};