var exec = require('cordova/exec');

exports.download = function (arg0, success, error) {
    if (typeof arg0 == "string") {
        exec(success, error, "DownloadManager", "download", [arg0]);
    } else {
        exec(success, error, "DownloadManager", "downloadObject", [arg0]);
    }
};