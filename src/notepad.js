const { ipcRenderer } = require('electron');
const fs = require('fs');

var lines = 100;

document.addEventListener('keydown', function (key) {
    if (key.code == "Space" || key.code == "Enter") {
        var e = document.getElementById('txtarea');
        lines++;
        e.rows = lines;
    }

    console.log(key.code);
});

// function writeFile (data) {
//     console.log(data);
// }

window.onload = function () {
    document.getElementById("minimizeBtn").addEventListener('click', () => {
        ipcRenderer.send('minimize');
    });

    document.getElementById("closeBtn").addEventListener('click', () => {
        ipcRenderer.send('close');
    });

    document.getElementById('saveBtn').addEventListener('click', () => {
        var value = document.getElementById('txtarea').value;
        fs.writeFile("test.txt", value.toString(), (err) => {
            if (err) throw err;
        });
    });
};