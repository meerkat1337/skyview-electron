const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  changeUrl: (url) => ipcRenderer.send('change-url', url),
  saveUrl: (url) => ipcRenderer.send('save-url', url),
  getSavedUrl: () => ipcRenderer.invoke('get-saved-url'),
  resetApp: () => ipcRenderer.send('reset-app')
});
