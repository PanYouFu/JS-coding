// reduce方法，接受两个参数
// reduce(fn, initial) 针对每一个item的回调、initial初始值。这个初始值也是fn的第一个参数
// fn: function(total, currentValue, currentIndex) total: 初始值，或最终返回值

// map方法
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// map不改变原数组的值

Array.prototype.myMap = function(fn) {
  const _this = this
  const res = _this.reduce((newArr, items, index) => {
    const val = fn(items, index)
    newArr.push(val)
    return newArr
  }, [])
  return res
}

const testArr = [1, 2, 3, 4, 5]

const newArr = testArr.myMap(items => {
  return `--${items}--`
})

console.log('newArr', newArr)


Array.prototype._map = function(fn, callbackThis) {
  // 最终返回的新数组
  let res = [];
  // 定义回调函数的执行环境
  // call第一个参数传入null，则 this指向全局对象，同 map的规则
  let CBThis = callbackThis || null;
  this.reduce((brfore, after, idx, arr) => {
      // 传入map回调函数拥有的参数
      // 把每一项的执行结果push进res中
      res.push(fn.call(CBThis, after, idx, arr));
  }, null);
  return res;
};

Array.prototype._map = function(fn, thisArg) {
  const result = [];
  this.reduce((prev, curr, index, array) => {
    result[index] = fn.call(thisArg, array[index], index, array);
  }, 0)
  return result;
}