const { app, BrowserWindow } = require("electron");
const isDev = !app.isPackaged;

if (require('electron-squirrel-startup')) return;

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 618,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        },
    });

    if (!isDev) {
        win.loadFile('./dist/index.html')
    } else if (process.env.ENV) {
        win.loadFile('./dist/index.html')
    } else {
        win.loadURL('http://localhost:3000');
    }
}

app.whenReady().then(() => {
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
