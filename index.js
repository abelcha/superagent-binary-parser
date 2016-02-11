module.exports = function(res, callback) {
    res.data = '';

    res.setEncoding('binary');
    res.on('data', function (chunk) {
	    res.data += chunk;
	});
    res.on('end', function () {
	    callback(null, new Buffer(res.data, 'binary'));
	});
}
