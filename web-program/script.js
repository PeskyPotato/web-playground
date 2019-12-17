function openDropdown(dropdown) {
    closeDropdowns();
    document.getElementById(dropdown).classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-item')) {
        this.closeDropdowns();
    }
}

/**
 * Close any open dropdown menus
 */
function closeDropdowns() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains("show")){
            dropdowns[i].classList.remove("show");
        }
    }
}