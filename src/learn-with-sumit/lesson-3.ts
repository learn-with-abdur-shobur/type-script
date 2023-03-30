let nameP;
nameP = 'Abc'; //no error
nameP = 34; // no error
console.log(nameP);

function abcd(e: number, r: number) {
	return r + e;
}

console.log(abcd(4, 6));

// array
let ab: (number | string)[] = [34, 535];
ab.push('234');
console.log(ab);

let numStr: string | number;

let objIs: {
	abc: string;
	id: number;
};

objIs = {
	abc: 'sf',
	id: 32,
};
