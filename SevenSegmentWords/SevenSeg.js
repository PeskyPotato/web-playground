let letterMappings = {
    "B" : 0x7F,
    "E" : 0x4F,
    "G" : 0x7B,
    "H" : 0x17,
    "I" : 0x06,
    "L" : 0x1E,
    "O" : 0x7E,
    "S" : 0x5B,
    "Z" : 0x6D
};

class SevenSeg {

    draw(num, index) {
        let val = letterMappings[num]
        push();

        translate(index*140, 0);
        noStroke();
        noFill();

        // A
        fill(getColor(val, 6))
        rect(60, 20, 78, 18, 10, 10);
        // B
        fill(getColor(val, 5))
        rect(140, 40, 18, 98, 10, 10);
        // C
        fill(getColor(val, 4))
        rect(140, 160, 18, 98, 10, 10);
        // D
        fill(getColor(val, 3));
        rect(60, 260, 78, 18, 10, 10);
        // E
        fill(getColor(val, 2));
        rect(40, 160, 18, 98, 10, 10);
        // F
        fill(getColor(val, 1));
        rect(40, 40, 18, 98, 10, 10);
        // G
        fill(getColor(val, 0));
        rect(60, 140, 78, 18, 10, 10);

        pop();
	}
}