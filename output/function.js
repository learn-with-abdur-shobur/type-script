"use strict";
// optional value using var?:type
let fun = (a, b = 2) => { };
fun('dsf');
let myFun;
myFun = (a, b) => {
    return a + b;
};
let abc;
abc = (a, b, c, user) => {
    return a + b;
};
abc('sf', 'sdf', 34, { name: 'df', age: 34 });
// using function default parameter
function abcde(x, y = 10) {
    return x + y;
}
let x = abcde(4);
const myFriends = ['ads', 'sdf', 'sdf'];
let newArF = [...myFriends].reverse();
const RestParameter = (...f) => {
    f.forEach((e) => console.log(e));
};
const xu = RestParameter('abc', 'sds', '234');
