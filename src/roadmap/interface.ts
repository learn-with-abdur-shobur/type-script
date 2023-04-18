// interface
// https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript

interface carObj {
	name: string;
	build: number;
}

const dataForCar: carObj = {
	build: 23,
	name: 'Change',
};

// 1. this is work for object

// want to add extra interface
interface carColor extends carObj {
	color: string;
}

const NewCar: carColor = {
	build: 324,
	color: 'red',
	name: 'add new Name',
};

interface simpleValue {
	name: string;
}

const data: simpleValue = {
	name: 'asdf',
};

interface addSimpleValue extends simpleValue {
	age: number;
}
const newData: addSimpleValue = {
	age: 234,
	name: 'abcd',
};

// create function
interface SetFun {
	(a: number, b: string): void;
}

interface Bx1 {
	length: number;
	name: string;
	age: number;
}

const bx1: Bx1 = {
	age: 234,
	length: 22,
	name: '234',
};
