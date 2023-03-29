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
const newUser = (user: User) => {
	return {
		name: user.name,
		id: user.id,
	};
};

console.log(newUser({ name: 'Change Name', id: 3 }));

type myBool = true | false;
