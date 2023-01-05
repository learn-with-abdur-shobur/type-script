// optional value using var?:type
let fun = (a: string, b: number = 2) => {
  console.log(b)
}

fun('dsf')

let myFun: (a: number, b: string) => void

myFun = (a: number, b: string) => {
  return a + b
}
console.log(myFun(3, '234'))

let abc: (
  a: string,
  b: string,
  c?: number,
  user?: {
    name: string
    age: number
  },
) => string
abc = (
  a: string,
  b: string,
  c?: number,
  user?: {
    name: string
    age: number
  },
) => {
  return a + b
}

abc('sf', 'sdf', 34, { name: 'df', age: 34 })
