interface SomeType {
	readonly prop: string;
}

function doSomething(obj: SomeType) {
	// We can read from 'obj.prop'.
	// console.log(`prop has the value '${obj.prop}'.`);
}
doSomething({ prop: 'text' });

interface StringArray {
	[index: number]: string;
}

const valueAdd: StringArray = {
	1: 'sdf',
	2: 'sdf',
};

interface Colorful {
	color: string;
}
interface Circle {
	radius?: number;
}

type ColorfulCircle = Colorful & Circle;
