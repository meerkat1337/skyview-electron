const urlInput = document.getElementById('url-input');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const setupScreen = document.getElementById('setup-screen');

async function init() {
    const savedUrl = await window.electronAPI.getSavedUrl();
    if (savedUrl) {
        window.electronAPI.changeUrl(savedUrl);
    } else {
        setupScreen.classList.remove('hidden');
    }
}

if (saveBtn) {
    saveBtn.addEventListener('click', async () => {
        const url = urlInput.value.trim();
        if (url) {
            let target = url;
            if (!/^https?:\/\//i.test(target)) target = 'https://' + target;
            await window.electronAPI.saveUrl(target);
            window.electronAPI.changeUrl(target);
        }
    });
}

if (resetBtn) {
    resetBtn.addEventListener('click', async () => {
        // We use the same logic: tell Electron to save null and reload.
        // To make this work with the new main.js, we'll just tell it to save null.
        // Then the main.js reload logic handles the rest.
        // Actually, the main.js reset function is more robust.
        // Let's just trigger the reset by calling a new IPC command.
        window.electronAPI.resetApp(); 
    });
}

init();
