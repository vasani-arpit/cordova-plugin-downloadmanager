var exec = require('cordova/exec');

exports.download = function(arg0, success, error) {
    exec(success, error, "DownloadManager", "download", [arg0]);
};

exports.addCompletedDownload = function(title, description, mimeType, path, length, success, error) {
    exec(success, error, "DownloadManager", "addCompletedDownload", [title, description, mimeType, path, length]);
};