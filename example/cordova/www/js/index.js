function downloadFile() {
    var fail = function (message) {
        alert(message)
    }
    var success = function (data) {
        console.log("success");
    }
    //cordova.plugins.DownloadManager.download("https://github.com/apache/cordova-android/archive/8.0.0.zip", success, fail);
    cordova.plugins.DownloadManager.download({
        url: "https://github.com/apache/cordova-android/archive/8.0.0.zip",
        filename: "test.zip",
        description: "App is downloading a Zip file"
    }, success, fail);
}