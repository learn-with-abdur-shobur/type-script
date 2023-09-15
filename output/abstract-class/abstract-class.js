"use strict";
class Car {
}
class Vehicle {
    startEngine() {
        console.log('start');
    }
    move(x) {
        console.log('moving ', x);
    }
    stopEngine() {
        console.log('Stop Now');
    }
    test() {
        console.log('ok to run');
    }
}
const Vehicle1 = new Vehicle();
// console.log(Vehicle1);
// Vehicle1.test();
class AllCar extends Car {
    constructor(text) {
        super();
        this.text = text;
    }
    move(x) {
        console.log(this.text, x);
    }
    startEngine() {
        console.log('start');
    }
    stopEngine() {
        console.log('stop');
    }
    test() {
        console.log('test');
    }
}
const seeCar = new AllCar('text');
seeCar.move(34);
