function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function () {
    if (this instanceof Square) {
        // console.log(this.widthAndHeight * this.widthAndHeight);
        return this.widthAndHeight * this.widthAndHeight;
    } else {
        // console.log(this.width * this.height);
        return this.width * this.height;
    }
};

function Square(widthAndHeight) {
    this.widthAndHeight = widthAndHeight;
}

Square.prototype.getArea = Rectangle.prototype.getArea;

var rect = new Rectangle(4, 5);
rect.getArea();

var square = new Square(4);
square.getArea();
