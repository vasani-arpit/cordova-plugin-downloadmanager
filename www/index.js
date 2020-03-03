
var value = {
    url : "https://speed.hetzner.de/100MB.bin",
    fileName : "example",
    des : ""
};
var appName;
var message; 
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
                var fail = function (message) {
                    console.log('message',message);    
                    alert(message)
                 }
                 var success = function (data) {
                        console.log("succes");
                 }
                cordova.getAppVersion.getAppName(function(name){
                    appName = name;
                    // My App Name
                    console.log("App Name", name);
                });
                setTimeout(() =>{
                    message = appName + " is downloading ";
                    console.log(">>",message);
                     cordova.plugins.DownloadManager.download(value.url, value.fileName,value.des || message,success, fail);          
                 },6000)
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);
    }
};

app.initialize();
