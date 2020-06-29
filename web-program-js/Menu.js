class MenuItem {
    constructor(name, action){
        this.name = name;
        this.action = (typeof action !== 'undefined') ?  action : function() {};
        this.children = [];
    }

    addItem(item) {
        this.children.push(item);
    }
}

class Menu {
    constructor(menu_id) {
        this.menu_id = menu_id
        this.children = [];
    }

    addItem(item) {
        this.children.push(item);
    }

    displayMenu() {
        let menu = document.getElementById(this.menu_id);
        for (const item of this.children) {
            let button = document.createElement("button");
            button.innerText = item.name;
            button.classList.add("menu-item", "disable-select");
            button.setAttribute("onclick", "openDropdown('" + item.name.toLowerCase() + "-dropdown');");
        
            let dropdown = document.createElement("div");
            dropdown.setAttribute("class", "dropdown-content");
            dropdown.setAttribute("id", item.name.toLowerCase() + "-dropdown");
            for (const subitems of item.children) {
                let anchor = document.createElement("button")
                anchor.innerText = subitems.name;
                anchor.addEventListener("click", subitems.action);
                dropdown.appendChild(anchor);
            }
        
            menu.appendChild(button);
            menu.appendChild(dropdown);
        }
    }
}