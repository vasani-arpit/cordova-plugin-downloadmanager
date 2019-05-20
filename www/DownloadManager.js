var exec = require('cordova/exec');

exports.download = function (arg0, success, error) {
    if (typeof arg0 == "string") {
        exec(success, error, "DownloadManager", "download", [arg0]);
    } else {
         if(arg0.url == '' || arg0.url == "" || arg0.url == null || arg0.url.length <= 0){
            error('Please enter url');
            return false;
        }

        if(arg0.filename == '' || arg0.filename == "" || arg0.filename == null || arg0.filename.length <= 0){
            arg0.filename = arg0.url.substr((arg0.url.lastIndexOf('/') + 1));
        }

        if(arg0.description == '' || arg0.description == "" || arg0.description == null || arg0.description.length <= 0){
            arg0.description = "App is downloading a file";
        }

        exec(success, error, "DownloadManager", "downloadObject", [arg0]);
    }
};