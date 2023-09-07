// optional value using var?:type
let fun = (a: string, b: number = 2) => {};

fun('dsf');

let myFun: (a: number, b: string) => void;

myFun = (a: number, b: string) => {
	return a + b;
};

let abc: (
	a: string,
	b: string,
	c?: number,
	user?: {
		name: string;
		age: number;
	}
) => string;
abc = (
	a: string,
	b: string,
	c?: number,
	user?: {
		name: string;
		age: number;
	}
) => {
	return a + b;
};

abc('sf', 'sdf', 34, { name: 'df', age: 34 });

// using function default parameter
function abcde(x: number, y: number = 10): number {
	return x + y;
}

let x = abcde(4);

const myFriends: string[] = ['ads', 'sdf', 'sdf'];
let newArF = [...myFriends].reverse();

const RestParameter = (...f: string[]) => {
	f.forEach((e) => console.log(e));
};

const xu = RestParameter('abc', 'sds', '234');
