# Skyview Desktop Webapp

Skyview is a desktop application built with Electron. It is designed to run web applications as standalone desktop software.

---

## Key Features

*   **Instant Launch:** Enter your URL once, and the app launches it immediately every time you open it.
*   **Immersive UI:** Features a modern design with background support.
*   **Easy Reset:** Press `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac) to clear settings and enter a new URL.
*   **Portable & Installable:** Available as portable executables or standard installers.
*   **Cross-Platform:** Compatible with Windows and Linux.

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

---

## How to Build Your Own Version

If you want to build this app for different platforms (macOS, ARM, etc.) or customize the code, follow these steps:

### 1. Prerequisites
You must have [Node.js](https://nodejs.org/) installed on your computer.

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/meerkat1337/skyview-electron.git
cd skyview-electron

# Install the necessary building tools
npm install
```

### 3. Running in Development Mode
To test your changes instantly:
```bash
npm start
```

### 4. Creating Production Builds
To generate your own installers or portable files:
```bash
npm run build
```
The finished files will be located in the `dist/` folder.

---

## Using the App

1.  **First Run:** Enter your desired website URL in the setup screen.
2.  **Launch:** Click the **Launch** button.
3.  **Resetting URL:** If you need to change the website, press `Ctrl + Shift + R` on your keyboard.

---

## Legal & Attribution

This application is a generic wrapper and is not an official product of Yunkan.

- **Branding & Assets:** All logos, icons, and background imagery used in this project are the exclusive property of [https://yun-kan.com/](https://yun-kan.com/).

---
This project is licensed under the MIT License.

*Built by Meerkat*
