var electron = require('electron');
var BrowserWindow =electron.BrowserWindow;
var Menu = electron.Menu;
var app = electron.app;

app.on('ready',function(){
	var appWindow = new BrowserWindow();
	appWindow.loadURL('file://'+__dirname+'/index.html');
});
