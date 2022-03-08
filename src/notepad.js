const { ipcRenderer } = require('electron');
const fs = require('fs');

var lines = 100;

document.addEventListener('keydown', function (key) {
    fs.readFile("test.txt", (err, data) => {
        if (document.getElementById('txtarea').value.toString() == data.toString()) {
            document.getElementById("sts").innerHTML = "<i class='fa-regular fa-circle-check'></i> Saved!";
        }
        else {
            document.getElementById("sts").innerHTML = "<i class='fa-regular fa-circle'></i> Unsaved work.";
        }
        if (err) throw err;
        console.log(data.toString());
    });

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

    document.getElementById('saveBtn').addEventListener('click', () => {
        var value = document.getElementById('txtarea').value;
        fs.writeFile("temp.txt", value.toString(), (err) => {
            if (err) throw err;
        });
    
        var saveLink = document.createElement('a');
        saveLink.setAttribute('href', 'temp.txt');
        saveLink.setAttribute('download', 'file.txt');
        saveLink.click();

        fs.readFile("temp.txt", (err, data) => {
            if (document.getElementById('txtarea').value.toString() == data.toString()) {
                document.getElementById("sts").innerHTML = "<i class='fa-regular fa-circle-check'></i> Saved!";
            }
            else {
                document.getElementById("sts").innerHTML = "<i class='fa-regular fa-circle'></i> Unsaved work.";
            }
            if (err) throw err;
            console.log(data.toString());
        });

    });
    
};