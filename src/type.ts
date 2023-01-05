type str_num = string | number
type usr_type = { name: string; age: number }
let obj3: {
  name: str_num
  age: boolean
}

obj3 = {
  name: 'sdf',
  age: true,
}

function names(usr: str_num) {
  console.log(usr)
}
names('df')
