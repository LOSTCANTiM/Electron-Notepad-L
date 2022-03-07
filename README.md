# Electron-Notepad-Learning
A notepad application I made for learning purposes
Step 1: `npx create-electron-app@latest`

Adding custom titlebar: <a href="https://github.com/LOSTCANTiM/Electron-Notepad-L/blob/master/README.md#custom-title-bar-electron-js">Custom Titlebar</a>
Writing data in a Pre existing file: <a href="https://github.com/LOSTCANTiM/Electron-Notepad-L/blob/master/README.md#saving-and-reading-files">Writing Files</a>

how the code works
The code uses `<textarea>` tag for input area

And it increases the rows of textarea whenever you press Enter or Space

# Custom Title Bar Electron JS
Also How I Implemented the custom titlebar:
I had two JS scripts that formed the backend - `index.js` [the main one] nad `notepad.js` [that handles the notepad functions]

**Implementing Titlebar:**
```html
<div class="titlebar drag">
    <button class="title nodrag">Notepad</button>
    <button id="closeBtn" class="nodrag"><i class="fa-solid fa-xmark"></i></button>
    <button id="minimizeBtn" class="nodrag"><i class="fa-solid fa-minus"></i></button>
</div>
```
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

Your custom titleBar is ready! <br>
<img src="https://cdn.discordapp.com/attachments/888375074808287304/949979404409384980/unknown.png" width="25%">

# Saving And Reading Files
I'll be using the `fs` node.js module for these writing and reading opertations

I added a save icon on the titlebar when you click it, this takes the value present in the textarea <br>
`var value = document.getElementById('txtarea').value;`

Then to write in a **Pre existing File**:
```js
const fs = require('fs'); // get the file system module

var value = document.getElementById('txtarea').value; // getting the value in textarea

fs.writeFile("filename.txt", value.toString(), (err) => {
   if (err) throw err; 
});
```

