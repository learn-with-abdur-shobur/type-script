"use strict";
let hello = 'Hello';
// value
let user = {
    name: 'this is string',
    id: 2,
};
// function
function getUser() {
    return {
        name: '',
        id: 2,
    };
}
const newUser = (user) => {
    return {
        name: user.name,
        id: user.id,
    };
};
console.log(newUser({ name: 'Change Name', id: 3 }));
