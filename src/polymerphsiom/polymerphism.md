## Polymorphism

- When have a single class but different implementation

```ts
// this is main class
class Animal {
	makeSound(): void {
		console.log('buk');
	}
}

// extends sub classes 1
class dog extends Animal {
	makeSound(): void {
		console.log('dogs');
	}
}

// extends sub classes 2
class cat extends Animal {
	makeSound(): void {
		console.log('Carts');
	}
}

// crate a polymorphism method that take main class and implement method
const speak = (animal: Animal): void => {
	animal.makeSound();
};

// call the classes
const cats = new cat();
const dogs = new dog();

// now use speak function for polymorphism
// same function but different implementation
speak(dogs);
speak(cats);
```
