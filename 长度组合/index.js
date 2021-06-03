// 给一个长度为m的数组，找出n个长度的组合，例［1，3，5，13，11］，找3个元素的所有组合

const arr = [1, 3, 5, 13, 11]

function findSet(arr, n) {
  let res = []
  dfs(arr, res)
  
  
}
function dfs(res, arr) {
  arr.forEach(item => {
    res.push(item)
  })
}

var res = findSet(arr, 3)
console.log(res)


// for (i = 0; i < arr.length - n + 1; i++) {
//   let right = arr.slice(n + i - 1, arr.length)
//   right.forEach(item => {
//     let left = arr.slice(i, n-1+i)
//     left.push(item)
//     a.push(left)
//   })
// }
// return a