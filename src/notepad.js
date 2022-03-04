document.addEventListener('keydown', function (key) {
    if (key.code == "Enter") {
        var e = document.createElement('input');
        document.body.appendChild(e);
        e.focus();
    }
});

console.log("hello");