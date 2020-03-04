var exec = require('cordova/exec');


exports.download = function(arg0, arg1, arg2, success, error) {
    exec(success, error, "DownloadManager", "download", [arg0, arg1,arg2]);
};

exports.addCompletedDownload = function(title, description, mimeType, path, length, success, error) {
    exec(success, error, "DownloadManager", "addCompletedDownload", [title, description, mimeType, path, length]);
};