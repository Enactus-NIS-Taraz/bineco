document.getElementById("trigger").addEventListener("click", () => open())

function open() {
    moveMenu()
    changeTriggerIcon()
}

function moveMenu() {
    document.getElementById("header__container").classList.toggle("show")
    document.getElementById("trigger").classList.toggle("trigger-move")
}

function changeTriggerIcon() {
    if(document.getElementById("trigger__icon-menu").classList.contains("trigger__icon_active")) {
        document.getElementById("trigger__icon-menu").classList.remove("trigger__icon_active")
        document.getElementById("trigger__icon-cross").classList.add("trigger__icon_active")
    } else {
        document.getElementById("trigger__icon-menu").classList.add("trigger__icon_active")
        document.getElementById("trigger__icon-cross").classList.remove("trigger__icon_active")     
    }
}