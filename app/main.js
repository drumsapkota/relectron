var electron = require('electron');
var BrowserWindow =electron.BrowserWindow;
var Menu = electron.Menu;
var app = electron.app;

app.on('ready',function(){
	var appWindow = new BrowserWindow({width:600, height:400, autoHideMenuBar:true,title:"DSFtube"});
	appWindow.loadURL('file://'+__dirname+'/index.html');
});
