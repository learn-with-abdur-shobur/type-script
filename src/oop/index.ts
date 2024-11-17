class RectangleArea {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	getArea(): number {
		return this.width * this.height;
	}
}

class RectangularAreaCalculate {
	static getArea(rectangle: RectangleArea): number {
		return rectangle.height * rectangle.height;
	}
}

const rectangle1 = new RectangleArea(5, 5);
const area = rectangle1.getArea();
console.log(area);
