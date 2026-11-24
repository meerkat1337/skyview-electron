# 🚀 Skyview: The Ultimate Web-to-Desktop Wrapper

Skyview is a professional-grade, lightweight desktop application built with **Electron**. It is designed to take any web application (like Yunkan) and turn it into a standalone, seamless desktop experience. No more browser tabs, no more address bars—just your app, full screen, looking and feeling like a native desktop program.

---

## 💎 Key Features

*   **🚀 Instant Launch:** Enter your URL once, and the app launches it immediately every time you open it.
*   **🖼️ Immersive UI:** Features a modern "Glassmorphism" design with high-quality background support.
*   **🔄 Easy Reset:** Locked into the wrong URL? Simply press `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac) to wipe the settings and start over.
*   **📦 Portable & Installable:** Available as a single `.exe` (no installation needed) or a standard Windows Installer.
*   **🐧 Cross-Platform:** Fully compatible with Windows and Linux (AppImage).

---

## 🛠️ Getting Started (For Non-Techies)

We have made this as easy as possible. You don't need to know how to code to use Skyview.

### 🪟 On Windows

#### **Option A: The Portable Version (Easiest)**
1.  Go to the **[Releases](https://github.com/meerkat1337/skyview-electron/releases)** page.
2.  Download `Skyview-Portable.exe`.
3.  Double-click it. It runs immediately without installing anything!

#### **Option B: The Installer Version**
1.  Download `Skyview-Setup.exe` from the **[Releases](https://github.com/meerkat1337/skyview-electron/releases)** page.
2.  Run the installer and follow the prompts.
3.  Skyview will now appear in your Start Menu like any other program.

### 🐧 On Linux

1.  Download the `Skyview.AppImage` from the **[Releases](https://github.com/meerkat1337/skyview-electron/releases)** page.
2.  **Right-click** the downloaded file and select **Properties**.
3.  Go to the **Permissions** tab and check the box that says **"Allow executing file as program"**.
4.  Close the window and **double-click** the file to launch!

---

## 🎮 Using the App

1.  **First Run:** When you first open Skyview, you will see a beautiful setup screen.
2.  **Enter URL:** Type the full address of your website (e.g., `https://yun-kan.com`) into the box.
3.  **Launch:** Click the **Launch** button.
4.  **The Magic:** The setup screen disappears, and your website fills the entire window.

### ⚠️ "I entered the wrong URL! How do I fix it?"
Don't worry! You don't need to reinstall.
*   **Shortcut:** Press `Ctrl + Shift + R` on your keyboard.
*   **Result:** The app will instantly clear the old URL and bring you back to the setup screen.

---

## 👩‍💻 For Developers (How to Build/Modify)

If you want to change the look, add features, or build your own version:

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
To see your changes live while you code:
```bash
npm start
```

### 4. Creating Your Own Build
To generate your own `.exe` or `.AppImage` files:
```bash
npm run build
```
The finished files will appear in the `dist/` folder.

---

## ⚖️ Legal & Attribution

**IMPORTANT:** This application is a generic wrapper and is not an official product of Yunkan.

- **Branding & Assets:** All logos, icons, and background imagery used in this project are the exclusive property of [https://yun-kan.com/](https://yun-kan.com/).
- **Usage:** This repository is intended for demonstration and personal utility purposes. Please respect the intellectual property of the original creators.

---
*Built with ❤️ by Meerkat*
