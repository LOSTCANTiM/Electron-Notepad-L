# Electron-Notepad-Learning
A notepad application I made for learning purposes
Step 1: `npx create-electron-app@latest`

how the code works
The code uses `<textarea>` tag for input area

And it increases the rows of textarea whenever you press Enter or Space

Also How I Implemented the custom titlebar:
I had two JS scripts that formed the backend - `index.js` [the main one] nad `notepad.js` [that handles the notepad functions]

**Implementing Titlebar:**
```html
<div class="titlebar drag">
    <button class="title nodrag">Notepad</button>
    <button id="closeBtn" class="nodrag"><i class="fa-solid fa-xmark"></i></button>
    <button id="minimizeBtn" class="nodrag"><i class="fa-solid fa-minus"></i></button>
</div>```
Here's the HTML Code for the titlebar

The css property to drag objects in _Electron_:
```css
.drag { -webkit-app-region: drag; }
.nodrag { -webkit-app-region: no-drag; }
```
And the main js using `ipcRenderer` and `ipcMain`
first of all this is necessary: [add this in the index.js file when creating main window]
```js
webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
}
``` 

Then add ipcRenderer in your notepad.js and ipcMain in main file aka index.js
like this: `const { ipcMain } = require('electron');`

now use the `ipcRenderer.Send('string');` to send a kind of message to ipcMain and the message will be the give "string"
Now use `ipcMain.on('string' () => {});` to recieve the message and do something like:

```js
ipcMain.on('close', () => {
  mainWindow.close();
  app.quit();
});
```

Your custom titleBar is ready!
<img src="https://cdn.discordapp.com/attachments/888375074808287304/949979404409384980/unknown.png">


