
let sevenSegments = [];
let userWord = "";

let TOTAL_DIGITS = 9;

function setup() {
    let canvas = createCanvas(1350, 300);
    canvas.parent("sketch-holder");

    for(let i = 0; i < TOTAL_DIGITS; i++){
        sevenSegments.push(new SevenSeg());
    }
}

function draw() {
    background(50);
    wordEntered();
    // drawNum(338);
    drawWord(userWord);
}

function drawWord(word) {
    word = word.toUpperCase();
    for(let i = 0; i < TOTAL_DIGITS; i++) {
        sevenSegments[i].draw(word.charAt(i), i);
    }
}

function drawNum(num) {
    let stack = [];
    while(num > 0) {
        stack.push(num % 10);
        num = floor(num / 10);
    }
    if (stack.length <= TOTAL_DIGITS){
        while(stack.length != 0){
            for(let i = 0; i < TOTAL_DIGITS; i++){
                sevenSegments[i].draw(stack.pop(),i);
            }
        }
    }
}

function getColor(val, shift) {
  let r = 250;
  let g = 50;
  let b = 50;
  let a = 15+255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}

function wordEntered() {
    let input, filter;
    input = document.getElementById('name');
    userWord = input.value.toUpperCase();

}