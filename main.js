const { app, BrowserWindow } = require("electron");
const isDev = !app.isPackaged;
const Store = require('electron-store');
const _store = new Store();

if (require('electron-squirrel-startup')) return;

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 618,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    });

    if (!isDev) {
        win.loadFile('./dist/index.html')
    } else {
        win.loadURL('http://localhost:3000');
    }

    win.once('ready-to-show', () => {
        win.show()
    })
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
