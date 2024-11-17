"use strict";
class Shape {
}
class Circle extends Shape {
    calculateArea() {
        return Math.PI * 5 * 5;
    }
}
class Rectangle extends Shape {
    calculateArea() {
        return 5 * 5;
    }
}
const circle = new Circle();
console.log(circle.calculateArea());
