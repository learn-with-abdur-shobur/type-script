## Abstract Class

- Abstract Class is a main class, When some one extends Abstract Class, This class need must be implement all abstract classes property or elements
- Abstract Class is a shape of Class

**Write Abstract Class**

```ts
// write interface
interface IVehicle {
	startEngine(): void;
	stopEngine(): void;
	move(x: number): void;
}

// write abstract class
abstract class Car implements IVehicle {
	abstract move(x: number): void;
	abstract stopEngine(): void;
	abstract startEngine(): void;
}

// implement class
class AllCar extends Car {
	// if pass parameter use constructor
	text: string;
	constructor(text: string) {
		super(); // must be used super
		this.text = text;
	}

	// must be call all abstract element or get error
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

const seeCar = new AllCar('Move');
seeCar.move(34);
```
