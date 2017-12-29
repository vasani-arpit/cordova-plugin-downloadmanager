var exec = require('cordova/exec');

exports.download = function(arg0,token,success,error) {
    exec(success, error, "DownloadManager", "download", [arg0,token]);
};
