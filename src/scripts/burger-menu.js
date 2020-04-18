document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("header__container").classList.toggle("show");
    document.getElementById("trigger").classList.toggle("trigger-move");
}