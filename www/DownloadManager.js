var exec = require('cordova/exec');

/**
 * Download file in system's default download manager
 * @param {string} arg0 URL to download
 * @param {string} arg1 fileName
 * @param {string} arg2 description
 * @param {function(string)} success 
 * @param {function(string)} error 
 * @param {{setDestinationInExternalPublicDir:boolean}=} options 
 */
exports.download = function(arg0, arg1, arg2, success, error, options) {
    exec(success, error, "DownloadManager", "download", [arg0, arg1, arg2, options]);
};

/**
 * Method that calls the addCompletedDownload method on the DownloadManager object
 * @param {string} title Must match the filename which was written.
 * @param {string} description 
 * @param {string} mimeType i.e. "text/plain"
 * @param {string} path Absolute file path. Note: Don't include any file:// prefix in the path.
 * @param {number} length 
 * @param {function(string)} success 
 * @param {function(string)} error 
 */
exports.addCompletedDownload = function(title, description, mimeType, path, length, success, error) {
    exec(success, error, "DownloadManager", "addCompletedDownload", [title, description, mimeType, path, length]);
};