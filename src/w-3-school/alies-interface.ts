type a = string;
type b = number;
type c = boolean;

type car = {
	name: a;
	build: b;
	isOli: c;
};

const carName: a = 'Abc';
const carBuild: b = 234;
const carFuel: c = true;

const thisCar: car = {
	build: 234,
	isOli: true,
	name: 'Abc',
};

// console.log(thisCar);

// interface

interface t {
	w: string;
	h: number;
}

const T: t = {
	h: 23,
	w: 'sdf',
};

interface price extends t {
	pri: number;
}

const Price: price = {
	h: 34,
	pri: 234,
	w: '32',
};
