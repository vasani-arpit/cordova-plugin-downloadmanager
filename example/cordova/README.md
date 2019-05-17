## Prerequisites
- [Cordova](https://cordova.apache.org/#getstarted)

## Clone Project
```
git clone https://github.com/vasani-arpit/cordova-plugin-downloadmanager.git
```

## Add Android Platform
```
cordova platform add android
```

## Install Download Manager Plugin
```
cordova plugin add https://github.com/vasani-arpit/cordova-plugin-downloadmanager
```

## How to Use 
``` 
index.js file

// With Object
function downloadFile() {
    var fail = function (message) {
        alert(message)
    }
    var success = function (data) {
        console.log("success");
    }
    cordova.plugins.DownloadManager.download({
        url: "https://github.com/apache/cordova-android/archive/8.0.0.zip",
        filename: "test.zip",
        description: "App is downloading a Zip file"
    }, success, fail);
}

// Without Object
function downloadFile() {
    var fail = function (message) {
        alert(message)
    }
    var success = function (data) {
        console.log("success");
    }
    cordova.plugins.DownloadManager.download("https://github.com/apache/cordova-android/archive/8.0.0.zip", success, fail);
}

 index.html file
<button onclick="downloadFile()" class="button">Click To Download</button>

```

## Run Application
```
cordova run android
```

### Build Project
```
cordova build android
```