// var app = {
//     // Application Constructor
//     initialize: function() {
//         this.bindEvents();
//     },
//     // Bind Event Listeners
//     //
//     // Bind any events that are required on startup. Common events are:
//     // 'load', 'deviceready', 'offline', and 'online'.
//     bindEvents: function() {
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },
//     // deviceready Event Handler
//     //
//     // The scope of 'this' is the event. In order to call the 'receivedEvent'
//     // function, we must explicitly call 'app.receivedEvent(...);'
//     onDeviceReady: function() {
//         app.receivedEvent('deviceready');
//     },
//     // Update DOM on a Received Event
//     receivedEvent: function(id) {
//         // console.log('Received Event: ' + id);
//         $('#status-message').text("loading please wait ...");
//         var inAppBrowserRef = cordova.InAppBrowser.open('https://shopmate.bahgatfarms.com/categories', '_blank', 'location=no');
//         inAppBrowserRef.addEventListener('loadstart', this.loadStartCallBack);
//         inAppBrowserRef.addEventListener('loadstop', this.loadStopCallBack);
//         inAppBrowserRef.addEventListener('loaderror', this.loadErrorCallBack);
//     },
//
//     loadStartCallBack: function () {
//         $('#status-message').text("loading please wait ...");
//     }
// };

document.addEventListener("deviceready", onDeviceReady, false);

var inAppBrowserRef;

function onDeviceReady() {
    var url = "https://shopmate.bahgatfarms.com/categories";
    var target = "_blank";
    var options = "location=no,hidden=yes";
    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
    inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
}

// var inAppBrowserRef;
// function showHelp(url) {
//     var target = "_blank";
//     var options = "location=yes,hidden=yes";
//     inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
//     inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
//     inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
//     inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
// }

function loadStartCallBack() {
    // $('#status-message').text("loading please wait ...");
    // document.getElementById("status").innerText = "Loading ...";
    // document.getElementById("loading").style.display = "block";
}

function loadStopCallBack() {
    if (inAppBrowserRef != undefined) {
        // inAppBrowserRef.insertCSS({ code: "body{font-size: 25px;" });
        // $('#status-message').text("");
        // inAppBrowserRef.show();
        // document.getElementById("status").innerText = "Done ...";
        document.getElementById("loading").style.display = "none";
        inAppBrowserRef.show();
    }
}

function loadErrorCallBack(params) {
    // document.getElementById("status").innerText = "";
    // var scriptErrorMesssage =
    //    "alert('Error: " + params.message + "');"
    // inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
    console.log("Error message: " + params.message);
    inAppBrowserRef.close();
    inAppBrowserRef = undefined;
}

// function executeScriptCallBack(params) {
//     if (params[0] == null) {
//         console.log("Error message: " + params.message);
//     }
// }
