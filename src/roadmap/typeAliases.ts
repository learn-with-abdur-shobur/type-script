// typeAliases

type name = string;
type age = number;

type cars = {
	name: string;
	age: number;
};

const Cars: cars = {
	age: 234,
	name: 'sf',
};

const carNames: name = 'st';
const carAge: age = 234;

type F = 'asdf' | 'sdf' | 234;
const nameOfF: F = 'asdf';
