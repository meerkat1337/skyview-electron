const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const configPath = path.join(app.getPath('userData'), 'config.json');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Skyview",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.removeMenu();

  // Register a global shortcut to reset the app: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
  globalShortcut.register('CommandOrControl+Shift+R', () => {
    console.log('Reset shortcut pressed');
    resetApp();
  });
}

function resetApp() {
  // 1. Clear the saved URL
  if (fs.existsSync(configPath)) {
    fs.unlinkSync(configPath);
  }
  // 2. Reload the local index.html
  mainWindow.loadFile('index.html');
}

ipcMain.on('reset-app', () => { resetApp(); });
ipcMain.on('change-url', (event, url) => {
  mainWindow.loadURL(url);
});

ipcMain.handle('get-saved-url', () => {
  if (fs.existsSync(configPath)) {
    const data = JSON.parse(fs.readFileSync(configPath));
    return data.url;
  }
  return null;
});

ipcMain.on('save-url', (event, url) => {
  const data = { url: url };
  fs.writeFileSync(configPath, JSON.stringify(data));
});

app.whenReady().then(createWindow);

app.on('will-quit', () => {
  // Unregister all shortcuts when the app is about to quit
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
