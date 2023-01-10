


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColorRestangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}.`);
    }
}

const div = new ColorRestangleWithText(5, 5, 'Hello!', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(1152, 12);

// console.log(square.calcArea());
// console.log(long.calcArea());