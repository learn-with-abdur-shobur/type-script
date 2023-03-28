let hello = 'Hello';

// type
interface User {
	id: number;
	name: string;
}

// value
let user: User = {
	name: 'this is string',
	id: 2,
};

// function
function getUser(): User {
	return {
		name: '',
		id: 2,
	};
}
console.log(getUser());
