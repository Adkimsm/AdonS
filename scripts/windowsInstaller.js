const { createWindowsInstaller } = require("electron-winstaller");
const path = require("path");

createWindowsInstaller({
	titie: "Easier",
	authors: "Uazira Inc.",
	appDirectory: path.resolve(__dirname, "..", "out", "Easier-win32-x64"),
	outputDirectory: path.resolve(__dirname, "..", "output"),
	name: "Easier",
    setupExe: "Easier.exe",
    description: "Easier is a simple, easy to use, and powerful exe system for Windows.",
})
	.then(() => console.log("Success!"))
	.catch((e) => console.log(`Error: ${e.message}`));
