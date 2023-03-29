// type:Array
let n: string[] = ['sdf'];
n.push('sdf');
//n.push(3); //error if not error cut default value
// console.log(n);

// type readonly
let o: readonly string[] = ['sdf'];
// o.push('sdf') //error
console.log(o);
