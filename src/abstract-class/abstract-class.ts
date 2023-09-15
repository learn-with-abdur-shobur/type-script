interface IVehicle {
	startEngine(): void;
	stopEngine(): void;
	move(x: number): void;
}

abstract class Car implements IVehicle {
	abstract move(x: number): void;
	abstract stopEngine(): void;
	abstract startEngine(): void;
}

class Vehicle implements IVehicle {
	startEngine(): void {
		console.log('start');
	}
	move(x: number): void {
		console.log('moving ', x);
	}
	stopEngine(): void {
		console.log('Stop Now');
	}

	test(): void {
		console.log('ok to run');
	}
}

const Vehicle1 = new Vehicle();
// console.log(Vehicle1);
// Vehicle1.test();

class AllCar extends Car {
	text: string;
	constructor(text: string) {
		super();
		this.text = text;
	}
	move(x: number): void {
		console.log(this.text, x);
	}
	startEngine(): void {
		console.log('start');
	}
	stopEngine(): void {
		console.log('stop');
	}
	test(): void {
		console.log('test');
	}
}

const seeCar = new AllCar('text');
seeCar.move(34);
