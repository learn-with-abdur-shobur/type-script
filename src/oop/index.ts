abstract class Shape {
	abstract calculateArea(): number;
}

class Circle extends Shape {
	calculateArea(): number {
		return Math.PI * 5 * 5;
	}
}

class Rectangle extends Shape {
	calculateArea(): number {
		return 5 * 5;
	}
}

const circle = new Circle();
console.log(circle.calculateArea());
