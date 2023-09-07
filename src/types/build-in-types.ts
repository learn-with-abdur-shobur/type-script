// array types

let array: number[] = [3, 34, 5, 53, 3];
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

let myTuple: [string, number] = ['sdf', 232];

// console.log(myTuple);

enum Color {
	Red = 'Left',
	Green = 'nbdfd',
	Blue = 'Blue',
}
let c: Color;
let ColorColor = Color.Green;
// console.log(ColorColor);

enum Direction {
	Up = 'UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT',
}

let dir = Direction.Left;
let myDirection: Direction = Direction.Up;
// console.log(dir); // Output: "UP"

// class

class PointX {
	age: number;
	constructor(x: number) {
		this.age = x;
	}
}
class Point extends PointX {
	x?: number;
	y?: number;
	constructor(x: number, y: number, age: number) {
		super(age);
		this.x = x;
		this.y = y;
	}
}

let em = new Point(3, 4, 324);
console.log(em);
