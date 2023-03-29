let p: [string, null, number, boolean] = ['sdf', null, 43, true];
p.push(null);
p.push(null);
p.push(null);
p.push(null);
// console.log(p);

let q: readonly [string, number] = ['string', 3];
// q.push ('sdf') // error

// named tuples
let r: [x: number, y: string];
r = [345, '345'];
// r.push(true);
console.log(r);
