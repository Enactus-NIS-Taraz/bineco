document.getElementById("trigger").onclick = function() {open()};

function open() {
    // document.getElementById('trigger__icon-menu').classList.remove('trigger__icon_active')
    // document.getElementById('trigger__icon-cross').classList.add("trigger__icon_active")
    document.getElementById("header__container").classList.toggle("show")
    document.getElementById("trigger").classList.toggle("trigger-move")
    if(document.getElementById("trigger__icon-menu").classList.contains("trigger__icon_active")) {
        document.getElementById("trigger__icon-menu").classList.remove("trigger__icon_active")
        document.getElementById("trigger__icon-cross").classList.add("trigger__icon_active")
    } else {
        document.getElementById("trigger__icon-menu").classList.add("trigger__icon_active")
        document.getElementById("trigger__icon-cross").classList.remove("trigger__icon_active")     
    }
}