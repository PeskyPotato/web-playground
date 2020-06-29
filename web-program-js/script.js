function openDropdown(dropdown) {
    closeDropdowns();
    document.getElementById(dropdown).classList.toggle("show");
}
window.onclick = function(event) {
    if (event.target.matches('.menu-subitem')) {
        console.log(event.target.getAttribute('data-target'));
    }
    
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

class System {
    constructor(){
        this.selected_text = "";
        var _this = this;
        document.addEventListener('selectionchange', () => {
            const selection = window.getSelection();
            _this.selected_text = selection.toString();
            console.log(_this.selected_text);
        });
        document.addEventListener('keydown', (e) =>  {
            console.log(e.code);
        });
    }

    get getSelected() {
        return this.selected_text;
    }
}

const system = new System();
console.log(system)

/**
 * Initialise menu
 */
var file = new MenuItem("File");
file.addItem(new MenuItem("Open", function() {
    console.log("Open");
}));
file.addItem(new MenuItem("Close", function close_window() {
    if (confirm("Close Window?")) {
      close();
    }
}));

var edit = new MenuItem("Edit");
edit.addItem(new MenuItem("Cut", function () {
    console.log("Cut");
}));
edit.addItem(new MenuItem("Copy", function() {
    console.log(system.getSelected);
    document.execCommand("copy");
}));
edit.addItem(new MenuItem("Paste"));

var view = new MenuItem("View");
view.addItem(new MenuItem("View 1"));
view.addItem(new MenuItem("View 2"));
view.addItem(new MenuItem("View 3"));

var help = new MenuItem("Help");
help.addItem(new MenuItem("About"));

menu = new Menu("menu")
menu.addItem(file);
menu.addItem(edit);
menu.addItem(view);
menu.addItem(help);
menu.displayMenu();


class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
        this.height = this.height +1 ;
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  
  console.log(square.area); // 100