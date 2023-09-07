// interface Box<Type> {
// 	contents: Type;
// }
// interface StringBox {
// 	contents: string;
// }

// let boxA: Box<string> = { contents: 'hello' };
// boxA.contents;

// let boxB: StringBox = { contents: 'world' };
// boxB.contents;

interface BoxA<type> {
	context: type;
}

const boxA: BoxA<string> = { context: 'abcd' };
const boxB: BoxA<number> = {
	context: 234,
};
