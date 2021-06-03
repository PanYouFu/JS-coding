Array.prototype.myflat = function(num = 1, res =[]) {
  // 若参数出错，返回原数组
  if (Number(num) < 0) {
    return this
  }
  let arr = this.concat()
  arr.forEach(item => {
    if (Array.isArray(item) && num > 0) {
      item.myflat(--num, res)
    } else {
      res.push(item)
    }
  })
  return res
}

// var arr1 = [1, 2, [3, 4]];
// arr1.flat(); 
// // [1, 2, 3, 4]

// var arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]

// var arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]

// //使用 Infinity，可展开任意深度的嵌套数组
// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var arr5 = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, ["string", { type: "对象" }]];
// arr5.flat(Infinity);
// // [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { type: "对象" }];

// // 移除数组中的空项
// var arr6 = [1, 2, , 4, 5];
// arr6.flat();
// // [1, 2, 4, 5]

Array.prototype.myflat = function(num = 1, res =[]) {
  // 若参数出错，返回原数组
  console.log(num)
  if (Number(num) < 0) {
    return this
  }
  let arr = this.concat()
  arr.forEach(item => {
    if (Array.isArray(item) && num > 0) {
      item.myflat(--num, res)
    } else {
      res.push(item)
    }
  })
  return res
}

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, ["type", { name: "对象" }]]
const arr1 = [1, 2, [3, 4]]
const arr2 = [1, 2, [3, 4, [5, 6]]]
const arr3 = [1, 2, [3, 4, [5, 6]]]
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

const res4 = arr.myflat(Infinity)
console.log('res4--', res4) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const res1 = arr1.myflat()
// console.log('res1--', res1) // [1, 2, 3, 4]

// const res2 = arr2.myflat()
// console.log('res2--', res2) // [1, 2, 3, 4, [5, 6]]