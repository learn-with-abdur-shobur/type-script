"use strict";
class TheCar {
    constructor(name, build) {
        this.name = name;
        this.build = build;
    }
    run() {
        console.log(this.name + this.build);
    }
}
const TheCar1 = new TheCar('build is ', 324);
class Animal {
    makeSound() {
        console.log('buk');
    }
}
class dog extends Animal {
    makeSound() {
        console.log('dogs');
    }
}
class cat extends Animal {
    makeSound() {
        console.log('Carts');
    }
}
const speak = (animal) => {
    animal.makeSound();
};
const ani = new Animal();
const cats = new cat();
const dogs = new dog();
speak(dogs);
speak(cats);
dogs.makeSound();
