interface ICar {
	name: string;
	build: number;
	run(): void;
}

class TheCar implements ICar {
	name: string;
	build: number;
	constructor(name: string, build: number) {
		this.name = name;
		this.build = build;
	}
	run() {
		console.log(this.name + this.build);
	}
}

const TheCar1 = new TheCar('build is ', 324);

class Animal {
	makeSound(): void {
		console.log('buk');
	}
}

class dog extends Animal {
	makeSound(): void {
		console.log('dogs');
	}
}

class cat extends Animal {
	makeSound(): void {
		console.log('Carts');
	}
}

const speak = (animal: Animal): void => {
	animal.makeSound();
};
const ani = new Animal();
const cats = new cat();
const dogs = new dog();
speak(dogs);
speak(cats);
dogs.makeSound();
