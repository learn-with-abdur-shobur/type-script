"use strict";
const s = {
    type: 'sf',
    year: 23,
};
// s.type = 34; // error
// s.age = 34; //error
// console.log(s);
const t = {};
t.name = 34;
t.age = '34';
console.log(t);
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
// Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
