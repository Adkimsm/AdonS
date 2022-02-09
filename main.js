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
        },
    });

    if (isDev) {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
    } else {
        win.loadFile('./dist/index.html')
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
