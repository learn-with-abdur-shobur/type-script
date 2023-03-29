function getTime(): number {
	return new Date().getTime();
}

console.log(getTime());

const arrFun = (abc: string, news: string = 'sdf') => {
	console.log(abc, news);
};
arrFun('ewr');
// arrFun();
// console.log(arrFun());

function newFunc(value: string = 'asf') {
	console.log(value);
}
newFunc();
