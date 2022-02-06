const { app, BrowserWindow, ipcMain, Notification, session } = require("electron");
const path = require("path");
const isDev = !app.isPackaged;

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

    win.loadFile("./public/index.html");
    
    if (isDev) {

		win.webContents.openDevTools();
		require("electron-reload")(__dirname.replace(/public/, ""), {
			electron: path.join(
				__dirname.replace(/public/, ""),
				"node_modules",
				".bin",
				"electron"
			),
		});
	}
}

app.whenReady().then(async () => {
    const reactDevToolsPath = "C:\\Users\\rafae\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\4.23.0_0"
    await session.defaultSession.loadExtension(reactDevToolsPath)
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
