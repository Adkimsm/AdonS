/*eslint-disable no-undef */
const { app, BrowserWindow, Menu, dialog, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

const Store = require("electron-store");

Store.initRenderer();

let mainWindow = null;

const channelName = "Plugin-Uninstall-All";
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1000,
		resizable: false,
		height: 618,
		show: false,
		backgroundColor: "#e0e0e0",
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
			contextIsolation: false,
		},
	});

	mainWindow.loadFile("./app/index.html");

	mainWindow.once("ready-to-show", () => {
		mainWindow.show();
	});

	const template = [
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
	//mainWindow.webContents.openDevTools()
}
if (!app.isPackaged) {
	const md5 = require("md5");
	let fsWait = false,
		preveMd5 = null;
	const filePath = "./app/";
	console.log(`正在监听 ${filePath}`);
	fs.watch(filePath, (event, filename) => {
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
app.whenReady().then(() => {
	createWindow();

	app.on("activate", function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", function () {
	if (process.platform !== "darwin") app.quit();
});

ipcMain.on("errorInRenderer", function (sys, msg) {
	dialog.showErrorBox("Error", msg);
});

ipcMain.on("openTerminal", function () {
		let terminalWin = new BrowserWindow({
			width: 1000,
			resizable: false,
			height: 618,
			backgroundColor: "#e0e0e0"
		});
	terminalWin.loadFile("./app/terminal.html");
	terminalWin.show();
});
