const myIsArr = function(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}

const a = 'sss'
const b = [1, 2, 3]

console.log('a---', Array.isArray(a))
console.log('b---', Array.isArray(b))

console.log('a---', myIsArr(a))
console.log('b---', myIsArr(b))

console.log(Object.prototype.toString.call(b))