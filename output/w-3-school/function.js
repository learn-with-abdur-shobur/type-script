"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
const arrFun = (abc, news = 'sdf') => {
    console.log(abc, news);
};
arrFun('ewr');
// arrFun();
// console.log(arrFun());
function newFunc(value = 'asf') {
    console.log(value);
}
newFunc();
