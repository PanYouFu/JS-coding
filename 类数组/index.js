// 类数组转换（arguments）

// [].slice.call(arguments) 或 Array.prototype.slice.call(arguments)
// Array.from(arguments)
// [...xxx] 展开运算符

function test() {
  console.log([].slice.call(arguments))
  console.log([...arguments])
  console.log(Array.from(arguments))
}

test('211', '213123', 'paspd')