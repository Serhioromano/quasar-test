const path = require("path");
const readFileSync = require("fs").readFileSync;
let params = JSON.parse(readFileSync("package.json"));

const electronInstaller = require("electron-winstaller");

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join(__dirname, "dist", "electron", "quasar-win32-x64"),
    outputDirectory: path.join(__dirname, "dist"),
    authors: "Sergey Romanov",
    exe: "quasar.exe",
    version: params.version,
});
resultPromise.then(
    () => console.log("It worked!"),
    e => console.log(`No dice: ${e.message}`)
);
