# cordova-plugin-downloadmanager
A Cordova plugin to download file in android default download manager with request Headers.

## Supported Platforms

 - Android (SDK >= 11)

 ## Installation

 ```
 cordova plugin add https://github.com/kiani1/cordova-plugin-downloadmanager
 ```

 ## How to Use

 ```
 //once device is ready
var fail = function (message) {    
    alert(message)
}
var success = function (data) {
        console.log("succes");
}
cordova.plugins.DownloadManager.download("Your URL to download","Your authorization token", success, fail);
 ```
