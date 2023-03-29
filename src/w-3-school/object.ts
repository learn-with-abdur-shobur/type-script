const s: { type: string; year: number } = {
	type: 'sf',
	year: 23,
};

// s.type = 34; // error
// s.age = 34; //error
// console.log(s);

const t: { [index: string]: number | string } = {};
t.name = 34;
t.age = '34';
console.log(t);

const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // no error

// Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);
