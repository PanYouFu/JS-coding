// apply
// apply 立即执行无返回，并改变this指向，接受的参数为一个数组
// fn.apply(this, ['pkx', '25'])

// 思路：初始this指向的是 fn 。因此在参数对象下新增一个fn
Function.prototype.myApply = function(context) {
  var context = context || window
  var fn = Symbol()
  let result 
  context[fn] = this
  //获取传入的数组参数
  var args = arguments[1]
  if (args == undefined) { //没有传入参数直接执行
    // 执行这个函数
    result = context[fn]()
  } else {
    // 执行这个函数
    result = context[fn](...args)
  }
  // 从上下文中删除函数引用
  delete context.fn
  return result
}

function getInfo(name, age) {
  console.log(this.job, name, age)
}

var person = {
  job: 'H5'
}

getInfo.myApply(person, ['pkx', '26'])

// ---------

// 实现call，call与apply的区别，call的传参用逗号分隔
Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  // 获取参数 删除第一个元素 PS：slice(删除几个元素， 从第几个开始)
  var args = [...arguments].slice(1) 
  let result = context.fn(...args)
  delete context.fn
  return result
}

getInfo.myCall(person, 'pkx', '27')


// 实现bind



