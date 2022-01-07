/*eslint-disable no-undef */
const { app, BrowserWindow, dialog, ipcMain, globalShortcut, autoUpdater } = require("electron");
const fs = require("fs");

const Store = require("electron-store");

Store.initRenderer();

if (require('electron-squirrel-startup')) return;

let mainWindow = null;

function toogleDevTools() {
	mainWindow.webContents.isDevToolsOpened() ? mainWindow.webContents.closeDevTools() : mainWindow.webContents.openDevTools({ mode: 'bottom' });
}

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1000,
		resizable: false,
		height: 618,
		backgroundColor: "#e0e0e0",
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadFile("./app/index.html");

	console.log(app.getVersion());

	/*const template = [
		{
			label: "Settings",
			role: "Settings",
			submenu: [
				{
					label: "Install Plugin",
					click() {
						dialog.showMessageBoxSync({
							title: "注意!",
							message:
								"插件安装后拥有系统一切权限，请您确认您的插件提供者不会作恶！",
						});
						const files = dialog.showOpenDialogSync(mainWindow, {
							properties: ["openFile"],
							filters: [
								{
									name: "JSON Files",
									extensions: ["json"],
								},
							],
						});
						if (files) {
							console.log(files[0]);
							mainWindow.webContents.send(
								"Plugin-Content",
								files[0],
								fs.readFileSync(files[0], { encoding: "utf8" })
							);
						}
					},
				},
				{
					label: "Uninstall All Plugin",
					click() {
						mainWindow.webContents.send(channelName, "checked");
					},
				},
			],
		},
		{
			label: "Developer",
			role: "Developer",
			submenu: [
				{
					label: "Toggle Developer Tools",
					click() {
						mainWindow.webContents.toggleDevTools();
					},
				},
				{
					label: "Reload",
					click() {
						mainWindow.webContents.reload();
					},
				},
			],
		},
	];
	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
	*/
	//mainWindow.webContents.openDevTools()

	globalShortcut.register('Control+Shift+D', () => {
		toogleDevTools();
	});
	console.log(app.getPath('userData'));
}

if (!app.isPackaged) {
	const md5 = require("md5");
	let fsWait = false,
		preveMd5 = null;
	const filePath = "./app/";
	console.log(`正在监听 ${filePath}`);
	fs.watch(filePath, (_event, filename) => {
		if (filename) {
			if (fsWait) return;
			fsWait = setTimeout(() => {
				fsWait = false;
			}, 100);
			var currentMd5 = md5(fs.readFileSync(filePath + filename));
			if (currentMd5 == preveMd5) {
				return;
			}
			preveMd5 = currentMd5;
			console.log(`${filePath}文件发生更新`);
			mainWindow.webContents.reload();
		}
	});
}

if (app.isPackaged) {
	autoUpdater.setFeedURL(`https://adons.vercel.app/update/${process.platform}/${app.getVersion()}`);
	if (new Date().getDay() == 3 || 0) {
		autoUpdater.checkForUpdates();
		console.log("[AutoUpdater] Updater Run Well.");
	}
}

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
	const dialogOpts = {
		type: 'info',
		buttons: [
			'立即更新',
			'以后再说'
		],
		title: 'Easier 已接收到更新！',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: '新版本已经下载，重启 Easier 来安装更新。'
	};
	dialog.showMessageBox(dialogOpts).then((returnValue) => {
		if (returnValue.response === 0) {
			app.removeListener("window-all-closed");
			globalShortcut.unregisterAll();
			autoUpdater.quitAndInstall();
		}
	});
});

autoUpdater.on('error', (message) => {
	dialog.showErrorBox("Error", "There was a problem updating the application.\nPlease Restart The Application.");
	console.error(message);
});

app.whenReady().then(() => {
	createWindow();
	require('./api/mongodb')
});

app.on("window-all-closed", function () {
	globalShortcut.unregisterAll();
	if (process.platform !== "darwin") app.quit();
});

ipcMain.on("errorInRenderer", function (sys, msg) {
	dialog.showErrorBox("Error", msg);
});

ipcMain.on("openDevTools", function (sys, msg) {
	toogleDevTools();
});

ipcMain.on("InstallAllPluginsFromJSONFile", function (sys, msg) {
	dialog.showMessageBoxSync({
		title: "注意!",
		message:
			"插件安装后拥有系统一切权限，请您确认您的插件提供者不会作恶！",
	});
	const files = dialog.showOpenDialogSync(mainWindow, {
		properties: ["openFile"],
		filters: [
			{
				name: "JSON Files",
				extensions: ["json"],
			},
		],
	});
	if (files) {
		console.log(files[0]);
		mainWindow.webContents.send(
			"Plugin-Content",
			files[0],
			fs.readFileSync(files[0], { encoding: "utf8" })
		);
	}
});