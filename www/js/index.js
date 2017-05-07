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
//     },
//
//     loadStartCallBack: function () {
//         $('#status-message').text("loading please wait ...");
//     }
// };

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);

//var inAppBrowserRef;

function onDeviceReady() {
//  navigator.splashscreen.show();
//  navigator.splashscreen.hide();
//  var url = "https://shopmate.bahgatfarms.com/categories";
//  var target = "_blank";
//  var options = "location=no,toolbar=no,hidden=yes";
//  inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
//  inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
//  inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
//  inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);
//  window.location.href = "https://shopmate.bahgatfarms.com/categories";
//  inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
//  inAppBrowserRef = cordova.InAppBrowser.open("https://shopmate.bahgatfarms.com/categories", "_blank", "location=no,toolbar=no,hidden=yes");
    
//  window.location.replace("https://shopmate.bahgatfarms.com/categories");
    window.location.replace("https://storemate.herokuapp.com/organizations/bahgatfarms/");
}

function onOffline(){
    window.plugins.toast.showLongTop('فضلاً تحقق من اتصالك بالإنترنت');
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {
            return false;
        };
    }
}

function onOnline(){
    var anchors = document.getElementsByTagName("a");
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].onclick = function() {
            return true;
        };
    }
}

//function loadStartCallBack() {
//  setTimeout(function() {
//    document.getElementById("logo").style.display = "none";
//  }, 2000);
//  document.getElementById("loading").style.display = "block";
//}
//
//function loadStopCallBack() {
//    if (inAppBrowserRef != undefined) {
//        inAppBrowserRef.show();
//        // navigator.splashscreen.hide();
//    }
//}
//
//function loadErrorCallBack(params) {
//    console.log("Error message: " + params.message);
//}
