// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
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

	// and load the index.html of the app.
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
							filters: [{ name: "JSON Files", extensions: ["json"] }],
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
						mainWindow.webContents.send("Plugin-Uninstall-All", "checked");
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
	// Open the DevTools.
	// mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

	app.on("activate", function () {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
	if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
