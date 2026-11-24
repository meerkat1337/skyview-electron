# Skyview Desktop Webapp

Skyview is a desktop application built with Electron. It is designed to run web applications as standalone desktop software.

---

## Key Features

*   **Instant Launch:** Enter your URL once, and the app launches it immediately every time you open it.
*   **Immersive UI:** Features a modern design with background support.
*   **Easy Reset:** Press `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac) to clear settings and enter a new URL.
*   **Portable & Installable:** Available as portable executables or standard installers.
*   **Cross-Platform:** Compatible with Windows, Linux, and macOS.

---

## Getting Started

### Windows
1.  Go to the **Releases** page.
2.  Download `Skyview-Portable.exe` for a portable version, or `Skyview-Setup.exe` for the installer.
3.  Run the file to start.

### Linux
1.  Download the `Skyview.AppImage` from the **Releases** page.
2.  Right-click the file, go to **Properties** > **Permissions**, and allow "Executing file as program".
3.  Double-click to run.

### macOS
1.  Download the appropriate `.dmg` file for your hardware (Apple Silicon or Intel) from the **Releases** page.
2.  Open the `.dmg` and drag Skyview to your **Applications** folder.

---

## Using the App

1.  **First Run:** Enter your desired website URL in the setup screen.
2.  **Launch:** Click the **Launch** button.
3.  **Resetting URL:** If you need to change the website, press `Ctrl + Shift + R` on your keyboard.

---

## For Developers

### Installation
```bash
git clone https://github.com/meerkat1337/skyview-electron.git
cd skyview-electron
npm install
```

### Running Development Mode
```bash
npm start
```

### Building the Project
```bash
npm run build
```

---

## Legal & Attribution

This application is a generic wrapper and is not an official product of Yunkan.

- **Branding & Assets:** All logos, icons, and background imagery used in this project are the exclusive property of [https://yun-kan.com/](https://yun-kan.com/).

---
*Built by Meerkat*
