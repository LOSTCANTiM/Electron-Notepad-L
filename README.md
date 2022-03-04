# Electron-Notepad-Learning
A notepad application I made for learning purposes

how the code works

**Adding new lines system:**
```js
// when a key is pressed a function returns a event 'key'
document.addEventListener('keydown', function (key) {

    // checking if the key pressed is Enter then:
    if (key.code == "Enter") {
    
        // Create a new line
        var e = document.createElement('input');
        document.body.appendChild(e);
        
        // move the cursor on that line  
        e.focus();
    }
});
```
