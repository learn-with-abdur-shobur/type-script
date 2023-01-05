"use strict";
// optional value using var?:type
let fun = (a, b = 2) => {
    console.log(b);
};
fun('dsf');
let myFun;
myFun = (a, b) => {
    return a + b;
};
console.log(myFun(3, '234'));
let abc;
abc = (a, b, c, user) => {
    return a + b;
};
abc('sf', 'sdf', 34, { name: 'df', age: 34 });
