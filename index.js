module.exports = function(url, params) {
    if (params) {
        Object.keys(params).forEach(function(paramName) {
            url = url.replace(':' + paramName, params[paramName]);
        });
    }

    return url.replace(/:\w+\/?/gi, '');
};