"use strict";
class RectangleArea {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class RectangularAreaCalculate {
    static getArea(rectangle) {
        return rectangle.height * rectangle.height;
    }
}
const rectangle1 = new RectangleArea(5, 5);
const area = rectangle1.getArea();
console.log(area);
