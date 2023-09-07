"use strict";
// array types
let array = [3, 34, 5, 53, 3];
let objX = {
    name: 'abdur',
    name2: 'sh',
};
for (let x in objX) {
    // console.log(x);
}
// let en = array.entries();
// for (let x of en) {
// 	console.log(x);
// }
// console.log(en);
let myTuple = ['sdf', 232];
// console.log(myTuple);
var Color;
(function (Color) {
    Color["Red"] = "Left";
    Color["Green"] = "nbdfd";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
let c;
let ColorColor = Color.Green;
// console.log(ColorColor);
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let dir = Direction.Left;
let myDirection = Direction.Up;
// console.log(dir); // Output: "UP"
// class
class PointX {
    constructor(x) {
        this.age = x;
    }
}
class Point extends PointX {
    constructor(x, y, age) {
        super(age);
        this.x = x;
        this.y = y;
    }
}
let em = new Point(3, 4, 324);
console.log(em);
