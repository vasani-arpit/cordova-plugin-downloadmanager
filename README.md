# cordova-plugin-downloadmanager
A Cordova plugin to download file in system's default download manager

## Supported Platforms

 - Android (SDK >= 11)

 ## Installation

 ```
 cordova plugin add https://github.com/vasani-arpit/cordova-plugin-downloadmanager
 ```

 ## How to Use


 ```javascript
 //after device is ready
var fail = function (message) {    
    alert(message)
}
var success = function (data) {
        console.log("succes");
}
cordova.plugins.DownloadManager.download("Your URL to download", "Your file name","Your Description" ,success, fail);
 ```

```javascript
var options = {
  setDestinationInExternalPublicDir: true  // set true if you want to use public dir instead of files dir
}
cordova.plugins.DownloadManager.download("Your URL to download", "Your file name","Your Description" ,success, fail, options)
```

To add an already downloaded file to the Downloads database.  
```javascript
// Full absolute path the the already downloaded file.  It should be in file:///storage/emulated/0/Download/ or subfolder.
const filepath_sanitized = filepath.replace("file://", "");  // Note: Don't include any file:// prefix in the path.

/**
 * Method that calls the addCompletedDownload method on the DownloadManager object
 * @param {string} title Must match the filename which was written.
 * @param {string} description doesn't seem used?
 * @param {string} mimeType i.e. "text/plain"
 * @param {string} path Absolute file path. Note: Don't include any file:// prefix in the path.
 * @param {number} length size of the downloaded file
 * @param {function(string)} success callback
 * @param {function(string)} error callback
 */
cordova.plugins.DownloadManager.addCompletedDownload(filename, "Your Description", 'text/*', filepath_sanitized, length,
  (result) => {
    console.info(result);
  },
  (err) => {
    console.error(err);
  })
```

## Result

![screenshot](./screenshot/downloadplugin.gif)

_**If this plugin helps your project then don't forget to ⭐ star the repo.**_

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
