var ws = new WebSocket("ws://10.21.10.40:80");
var wss = new WebSocket("wss://10.21.10.40:443");
ws.onmessage = function(evt) {alert(evt.data);};
wss.onmessage = function(evt) {alert(evt.data);};
ws.send("Hello world!");
