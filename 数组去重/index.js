const arr=['12','32','89','12','12','78','12','32']
function unique (arr) {
  return Array.from(new Set(arr))
}
const a = unique(arr)
console.log(a)

function unique1 (arr) {
  let res = []
  for (const value of arr) {
    if (res.indexOf(value) == -1) {
      res.push(value)
    }
  }
  return res
}
const a1 = unique1(arr)
console.log(a1)

function unique2 (arr) {
  arr = arr.sort()
  let res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
      res.push(arr[i])
    }
  }
  return res
}

const a2 = unique2(arr)
console.log(a2)
