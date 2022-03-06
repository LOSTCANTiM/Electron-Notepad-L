const { ipcRenderer } = require('electron');

var lines = 100;

document.addEventListener('keydown', function (key) {
    if (key.code == "Space" || key.code == "Enter") {
        var e = document.getElementById('txtarea');
        lines++;
        e.rows = lines;
    }
});

window.onload = function () {
    document.getElementById("minimizeBtn").addEventListener('click', () => {
        ipcRenderer.send('minimize');
    });

    document.getElementById("closeBtn").addEventListener('click', () => {
        ipcRenderer.send('close');
    });
}

// console.log("hello");